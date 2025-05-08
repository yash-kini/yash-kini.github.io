import pandas as pd
import base64

# Step 1: Read the CSV file
df = pd.read_csv('guest_list.csv')

# Step 2: Keep only specified columns
columns_to_keep = [
    'First Name',
    'Last Name',
    'Haldi Mehndi - RSVP',
    'Hindu Wedding Ceremony - RSVP',
    'Jewish Wedding Ceremony & Reception - RSVP',
    'Brunch - RSVP'
]
df = df[columns_to_keep]

# Step 3: Remap RSVP values
rsvp_mapping = {
    'No Response': 'N',
    'Attending': 'Y',
    'Regret': 'N',
    'Not on event guest list': 'N'
}

rsvp_columns = columns_to_keep[2:]  # Get RSVP columns
df[rsvp_columns] = df[rsvp_columns].replace(rsvp_mapping)

# Step 4: Rename columns
column_rename = {
    'Haldi Mehndi - RSVP': 'Mehndi',
    'Hindu Wedding Ceremony - RSVP': 'HinduCeremony',
    'Jewish Wedding Ceremony & Reception - RSVP': 'JewishCeremony',
    'Brunch - RSVP': 'Brunch'
}
df = df.rename(columns=column_rename)

# Step 5: Save to CSV
output_file = 'processed_guest_list.csv'
df.to_csv(output_file, index=False)

# Step 6: Encode to Base64
with open(output_file, 'rb') as f:
    csv_data = f.read()
    base64_encoded = base64.b64encode(csv_data).decode('utf-8')

with open('encoded.txt', 'w') as f:
    f.write(base64_encoded)