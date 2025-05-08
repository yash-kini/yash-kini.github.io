import pandas as pd

def normalize_name(name):
    """Convert all-caps names to title case"""
    if isinstance(name, str):
        name = name.strip()
    if isinstance(name, str) and name.isupper():
        return name.title()
    return name

# 1. Read seating chart
seating_chart = pd.read_csv('seating_chart.csv')

# 2. Normalize names in seating chart
seating_chart['First Name'] = seating_chart['First Name'].apply(normalize_name)
seating_chart['Last Name'] = seating_chart['Last Name'].apply(normalize_name)

# 3. Validate duplicates
duplicates = seating_chart[seating_chart.duplicated(
    subset=['First Name', 'Last Name'], keep=False)]
if not duplicates.empty:
    duplicates.to_csv('duplicates.csv', index=False)

# 4. Validate all guests have seats
guest_list = pd.read_csv('guest_list.csv')
guest_list = guest_list[guest_list['Jewish Wedding Ceremony & Reception - RSVP'] == 'Attending']

# Check for missing guests
missing_guests = guest_list[
    ~guest_list[['First Name', 'Last Name']].apply(tuple, 1).isin(
        seating_chart[['First Name', 'Last Name']].apply(tuple, 1))
]
if not missing_guests.empty:
    missing_guests.to_csv('missing_seats.csv', index=False)

# 5. Merge and save transformed chart
transformed = seating_chart.merge(
    guest_list[['First Name', 'Last Name', 'Jewish Wedding Ceremony & Reception - Please select your preferred  entrée', 'Jewish Wedding Ceremony & Reception - Do you have any dietary restrictions? Please list them below.']],
    on=['First Name', 'Last Name'],
    how='left'
)
transformed.to_csv('transformed_seating_chart.csv', index=False)