const obfCsvData = "Rmlyc3QgTmFtZSxMYXN0IE5hbWUsTWVobmRpLEhpbmR1Q2VyZW1vbnksSmV3aXNoQ2VyZW1vbnksQnJ1bmNoDQpTYXJhaCxCcnltZXIsWSxZLFksWQ0KRW1pbHksUGFzdGVybmFrLFksWSxZLFkNCkJyZW4sU2xhdGVyLFksWSxZLFkNCkFuZ2VsLFdpbGxpYW1zLFksWSxZLFkNCkZhdGVtYWgsVGFsZWJpLFksWSxZLFkNCkRhaGxpYSxMZXZ5LFksWSxZLFkNCkpQLCxZLFksWSxZDQpNaXJpLFRlaWNoLFksWSxZLE4NClRvbW1hc28sQ2FjaW9sbGksWSxZLFksTg0KTmljayxXaW5zb3IsWSxZLFksTg0KTmlja2llLCxZLFksWSxODQpUZWphc3ZpLFJhaiBTYWdhcixZLFksWSxODQpZb3VuZXMsUGFydmluLFksWSxZLE4NCllvdW5lcydzLEd1ZXN0LFksWSxZLE4NClByYWF0aWthLE1laHJhLFksWSxZLE4NClNpZGRoYXJ0aCxEYXZlLFksWSxZLE4NCkNhcHRhaW4sQW5raXQgQ2hhdWhhbixZLFksWSxODQpTd2F0aSxDaGF1aGFuLFksWSxZLE4NCllpZmFuLFdhbmcsWSxZLFksTg0KS3VkcmF0LEthaGxvbixZLFksWSxODQpEYXZpZCxKZXNpbixOLFksWSxODQpBbmRyw6lhLE1vcnJpcyxOLFksWSxODQpKb2UsTW9ycmlzLE4sWSxZLE4NClN0ZXBoZW4sUGFzdGVybmFrLFksWSxZLFkNCkRhdmlkLFBhc3Rlcm5hayxZLFksWSxZDQpBbmRyZWEsSGlyc2NoZWltZXIsWSxZLFksWQ0KQWxhbmEsUGFzdGVybmFrLFksWSxZLFkNCkFsYW5hJ3MsR3Vlc3QsWSxZLFksWQ0KTWF4aW5lLEthdHosWSxZLFksWQ0KTWVsaXNzYSxQYXN0ZXJuYWssWSxZLFksWQ0KTWVsaXNzYSdzLEd1ZXN0LFksWSxZLFkNCkFuZHJldyxQYXN0ZXJuYWssWSxZLFksWQ0KQWxhbixQYXN0ZXIsWSxZLFksWQ0KTG9pcyxCZWluc3RvY2ssWSxZLFksWQ0KUGh5bGxpcyxQYXN0ZXIsWSxZLFksWQ0KU3V6YW5uZSxNb3JhbixZLFksWSxZDQpUb255LEJlcmFyZGksWSxZLFksWQ0KQWlsZW5lLFdpdHRzdGVpbixZLFksWSxZDQpCb2IsU3V0ZXIsWSxZLFksWQ0KVmFsLFN1dGVyLFksWSxZLFkNClN1c2FuLE1lcmlhbm8sWSxZLFksWQ0KS2VuLE1lcmlhbm8sWSxZLFksWQ0KSXNhYmVsLE1vcmFuLFksWSxZLFkNCkJyYWQsQ3JvbmssWSxZLFksWQ0KU3RlcGhlbixGZXJndXNvbixOLFksWSxZDQpDYXRoZXJpbmUsRmVyZ3Vzb24sTixZLFksWQ0KS2FyZW4sSGFscGVybixZLFksWSxODQpSYW4sTWlkcm9uaSxZLFksWSxODQpUYWxpYSxXb2xmZSxZLFksWSxODQpXZW5keSxQZXRlcnMsWSxZLFksTg0KR29yZGllLFBldGVycyxZLFksWSxODQpOb2EsV29sZmUsWSxZLFksTg0KUml0YSxIaXJzY2hlaW1lcixZLFksWSxZDQpNYXVyaWUsQmVyZ21hbixZLFksWSxZDQpBbGFuLEtvc2JlcmcsWSxZLFksWQ0KRG9ubmEsU3VsbGl2YW4sWSxZLFksWQ0KUm9iZXJ0LEhpcnNjaGVpbWVyLFksWSxZLFkNCk1hcmxhLEZveCxZLFksWSxZDQpKdXN0aW4sSGlyc2NoZWltZXIsWSxZLFksWQ0KSmVubmlmZXIsSGlyc2NoZWltZXIsWSxZLFksWQ0KTGluZHNheSxIaXJzY2hlaW1lcixZLFksWSxZDQpSb2IsQmFydGhhLE4sWSxZLFkNCkNoYXJsZW5lLEJhcnRoYSxOLFksWSxZDQpTZWFuLENyZWFnYW4sTixZLFksWQ0KVGFtYXJhLENyZWFnYW4sTixZLFksWQ0KUGVubnksTWFjRG9uYWxkLE4sWSxZLFkNCkhvb21hbixHYW5qYXZpLE4sWSxZLFkNClNoYXduLFdoaXRlaGVhZCxOLFksWSxZDQpFbGlzc2EsSHVua2luZyxOLFksWSxZDQpUcmFjaWUsVmFuIEtlc3NlbCxOLFksWSxZDQpNYXJ0eSxWYW4gS2Vzc2VsLE4sWSxZLFkNCkxpeixGaW5nZXIsTixZLFksWQ0KRGVyZWssTWl0Y2hlbCxOLFksWSxZDQpFbGFubmEsQ2xhcmtlLE4sWSxZLFkNCk1pY2hhZWwsQ2xhcmtlLE4sWSxZLFkNClJhY2hlbGxlLEZyeWRtYW4sTixZLFksWQ0KV2lsbGlhbSxGcnlkbWFuLE4sWSxZLFkNCkVseXNlLEZyeWRtYW4sTixZLFksWQ0KSmFyZWQsR2FmZmUsTixZLFksWQ0KRGViYmllLExheGVyLFksWSxZLFkNCkZhYmlhbixHb3JvZHppbnNreSxZLFksWSxZDQpKYW5pY2UsR29yb2R6aW5za3ksWSxZLFksWQ0KQWxleGFuZHJlLE1hbHRzZXYsWSxZLFksWQ0KVGVycnksV3JpZ2h0LFksWSxZLFkNClZhbHNhLFRob21hcyxZLFksWSxZDQpHZW9yZ2UsVGhvbWFzLFksWSxZLFkNClJlbmEsU2hlc2tpbixZLFksWSxZDQpHcmFudCxTdGlybGluZyxZLFksWSxZDQpOb2FoLExldnksWSxZLFksWQ0KS2F0aWUsRmxhbm5lcnksWSxZLFksWQ0KU3RldmVuLERhaW4sTixZLFksWQ0KU3RlcGhhbmllLExvb21lcixOLFksWSxZDQpTYW5kcmEsR3Jvc3MsWSxZLFksWQ0KTHVpeixHcm9zcyxZLFksWSxZDQpTdXp5LEdyb3NzLFksWSxZLFkNCk5pY29sZSxHcm9zcyxZLFksWSxZDQpHdXN0YXZvLEdyb3NzLFksWSxZLFkNCkdpZGVvbixHb2xhbixZLFksWSxZDQpZYWVsLEdvbGFuLFksWSxZLFkNCk1heWEsR29sYW4sWSxZLFksWQ0KQWRpLEdvbGFuLFksWSxZLFkNCkl0YWksR29sYW4sWSxZLFksWQ0KQ2Fyb2wsTWFyY3VzLFksWSxZLFkNClRlcnJ5LE1hcmN1cyxZLFksWSxZDQpEdWZmeSxP4oCZQ3JhdmVuLFksWSxZLFkNCk5hbmN5LEdvbGRiZXJnLFksWSxZLFkNCkFzaGVyLE1hcmN1cyxZLFksWSxZDQpEZWIsTGV2eSxZLFksWSxZDQpDYXJtaSxMZXZ5LFksWSxZLFkNCkJlbmppLEdvbGFuLFksWSxZLFkNClZlcmVkLEdvbGFuLFksWSxZLFkNCk9yLEdvbGFuLFksWSxZLFkNCkxpLEdvbGFuLFksWSxZLFkNCkJhcixHb2xhbixZLFksWSxZDQpMaW1vcixTaHVrZXIsWSxZLFksWQ0KU2hhaSxTaGFsZXYsWSxZLFksWQ0KRXJpY2EsUmVzaGVmLFksWSxZLFkNCkh1Z28sUmVzaGVmLFksWSxZLFkNCk5vYWgsTWFyY3VzLFksWSxZLFkNCkNoZXJ5bCxNaXRjaGVsbCxZLFksWSxZDQpBbWl0LFNoYWxldixZLFksWSxZDQpEYXZlLE9sc2VuLFksTixZLE4NClNoZWxsZXksT2xzZW4sWSxOLFksTg0KWWFzaCxLaW5pLFksWSxZLFkNClZpdmVrLE5heWFrLFksWSxZLE4NCkFuaXRhLE5heWFrLFksWSxZLE4NClByYW1vZCxCaGF0LFksTixZLE4NClByYXZhZGEsQmhhdCxZLE4sWSxODQpQcmF0aGEsQmhhdCxZLE4sWSxODQpBamF5LFJhbyxZLE4sWSxODQpDaGl0cmEsUmFvLFksTixZLE4NCkFuanUsUGFpLFksTixZLE4NClByYXZlZW4sUGFpLFksTixZLE4NClBvb25hbSxHdXB0YSxOLFksTixODQpQcmF2ZWVuLEd1cHRhLE4sWSxOLE4NCkJlZW5hLFBhcmVraCxOLFksTixODQpIYXJzaGFkLFBhcmVraCxOLFksTixODQpCZWVuYSxQYXJla2gsTixZLE4sTg0KQW51aixNYWRhbixOLE4sWSxODQpBbnVqJ3MsR3Vlc3QsTixOLFksTg0KVmlqYXksS3VtYXIsWSxZLFksTg0KQW5pbmRpdGEsS3VtYXIsWSxZLFksTg0KLE1ycy4gTWFoYW50aSxZLFksTixODQpBZGl0aSxOYWlkdSxZLFksWSxODQpBYmhheSxLdW1hcixZLFksWSxODQpZYW5hLEt1bWFyLFksWSxZLE4NCktyaXNoLE5haWR1LFksWSxZLE4NClZhc2FudGhpLE5haWR1LFksWSxZLE4NCk1hbmdlc2gsTWF2aW5LdXJ2ZSxZLFksTixODQpNZWdobmEsTWF2aW5LdXJ2ZSxZLFksTixODQpHdXJ1ZHV0dCxNYXZpbkt1cnZlLE4sWSxOLE4NClNhZGhhbmEsTWF2aW5LdXJ2ZSxOLFksTixODQpOZWVyYWosTWF2aW5LdXJ2ZSxZLFksTixODQpNYWl0aGlsaSxNYXZpbkt1cnZlLFksWSxOLE4NClByYWRlZXAsTmFpcixOLE4sWSxODQpOaW5hLE5haXIsTixOLFksTg0KTWFub2osU3JpdmFzdGF2YSxOLE4sWSxODQpNb25hLFNyaXZhc3RhdmEsTixOLFksTg0KU3VkaGlyLFB1bmphYmksTixOLFksTg0KTmVlcmphLFB1bmphYmksTixOLFksTg0KQ2hpbnRhbixKYWluLE4sTixZLE4NCk1vbmljYSxKYWluLE4sTixZLE4NCkJoYXNrYXIsQ2hvdWRoYXJ5LFksWSxOLE4NCk5lZWxhLENob3VkaGFyeSxZLFksTixODQpNdXJhbGksSXllcixOLFksTixODQpHZWV0YSxJeWVyLE4sWSxOLE4NCkNoaW5vbyxCYWxpZ2EsWSxZLFksWQ0KUnVwYSxCYWxpZ2EsWSxZLFksWQ0KS2F1c2hpayxCYWxpZ2EsWSxZLFksWQ0KVGFwb3NoaSxQYWksTixZLE4sTg0KVXBlbmRyYSxQYWksTixZLE4sTg0KU3V2YXJuYSxNYW5raWthcixOLFksTixODQpTYWRhbmFuYW5kLE1hbmtpa2FyLE4sWSxOLE4NCk1hbm9qLFBhaSxZLFksWSxODQpTYXZpdGEsUGFpLFksWSxZLE4NCkFrc2hhdCxQYWksWSxZLFksTg0KQWR2YWl0aCxQYWksWSxZLFksTg0KQWtzaGF0J3MsUGFydG5lcixZLFksWSxODQpBZHZhaXRoJ3MsUGFydG5lcixZLFksWSxODQpTYWNoaW4sU2hlbm95LFksWSxZLE4NCkFrc2hhdGEsU2hlbm95LFksWSxZLE4NClNhbnRvc2gsS2luaSxZLFksWSxZDQpFbHMsS2luaSxZLFksWSxZDQpOaW1heSxLaW5pLFksWSxZLFkNCk5pbGF5YSxLaW5pLFksWSxZLFkNCkRpbmVzaCxQYWksWSxZLFksWQ0KQW5pdGEsUGFpLFksWSxZLFkNCkFkaXR5YSxQYWksWSxZLFksWQ0KU2FyYWgsT2xzZW4sWSxZLFksWQ0KS2FydGhpayxLaW5pLFksWSxZLFkNClJhZ2h1dmVlcixOYXlhayxZLFksWSxZDQpBbml0YSxOYXlhayxZLFksWSxZDQpOYW5kaW5pLE5heWFrLFksWSxZLFkNClNpZCxOYXlhayxZLFksWSxZDQpQcmFrYXNoLE5heWFrLFksWSxZLFkNClNhbmpveSxQcmFiaHUsWSxZLFksWQ0KU2FuZGh5YSxQcmFiaHUsWSxZLFksWQ0KQXJ1bixQcmFiaHUsWSxZLFksWQ0KTWFkaGF2LEtpbmksWSxZLFksWQ0KU2FuamFtLEtpbmksWSxZLFksWQ0KQW5pLEtpbmksWSxZLFksWQ0KVGFuaXNoa2EsS2luaSxZLFksWSxZDQpWYXNhbnQsQmFsaWdhLFksWSxZLFkNCk1vbmljYSxCYWxpZ2EsWSxZLFksWQ0KR2F5YXRyaSxLaW5pLFksWSxZLFkNClNhbmp1LEtpbmksWSxZLFksWQ0KUm9oYW4sS2luaSxZLFksWSxZDQpSaW5rdSxLaW5pLFksWSxZLFkNClJhaHVsLEtpbmksWSxZLFksWQ0KUmlua3UncyxHdWVzdCxZLFksWSxZDQpMZWVuYSxEZW9kaGFyZSxZLE4sWSxODQpTYW5qZWV2LERlb2RoYXJlLFksTixZLE4NCkFuanVsaSxEZW9kaGFyZSxZLE4sWSxODQpOYW1pdGEsRGVvZGhhcmUsWSxOLFksTg0KTml0aW4sU2F3YW50LFksWSxZLE4NCkphc21pbmUsU2F3YW50LFksWSxZLE4NClNpZGRoYW50LFNhd2FudCxZLE4sWSxODQpFbGx5LFNhd2FudCxZLE4sWSxODQpWaWpheSxTaGlyb2RrYXIsTixZLE4sTg0KQXBhcm5hLFNoaXJvZGthcixOLFksTixODQpNZWRoYSxEYXRlLFksTixZLE4NClByYWthc2gsRGF0ZSxZLE4sWSxODQpNb25pc2hhLERhdGUsWSxOLFksTg0KUmF2aSxLYXJndXRrYXIsWSxOLFksTg0KTWVlcmF0YWksS2FyZ3V0a2FyLFksTixZLE4NClJhbmksTmVuZSxOLE4sWSxODQpNaWxpbmQsTmVuZSxOLE4sWSxODQpLcnV0aWthLE5lbmUsTixOLFksTg0KU3dhdGksVmFpZHlhLE4sTixZLE4NCkFiaGF5LFZhaWR5YSxOLE4sWSxODQpTdWplZXQsS2luaSxZLFksWSxZDQpWYW5pdGEsS2luaSxZLFksWSxZDQpUd2lzaGEsS2luaSxZLFksWSxZDQpBbWFyLCxZLFksWSxZDQpLYXRoZXJpbmUsUGFjaXMsTixZLE4sTg0KS2F0aGVyaW5lJ3MsUGFydG5lcixOLFksTixODQpTaGFsaW5pLFNoZXRoLFksTixZLE4NClN1bmlsLFNoZXRoLFksTixZLE4NCkJlbm5ldHQsUm91bGVhdSxZLFksWSxZDQpJc2FiZWxsYSxHcmVjbyxZLFksWSxZDQpUaG9tYXMsU3llcixZLFksWSxZDQpNaWNoYWVsLExld2lzLFksWSxZLE4NCkt5bGUsQ29uc3RhbnRpbixZLFksWSxODQpSb2JlcnQsTGF6aWVyLFksWSxZLE4NCktpbSxMYW5nYXQsWSxZLFksTg0KQWlkYW4sQmxhY2ttb3JlLE4sTixZLE4NCkFtYW5kYSwsTixOLFksTg0KQWRyaWFuLEZpbGljZSxZLFksWSxODQpUZXJyaSxKb25lcyxZLFksWSxODQpNb2xseSxSZWV2ZXMsWSxZLFksTg0KQWxlamFuZHJhLE1lemEsWSxZLFksTg0KUnlhbixCZW5uZXR0LFksWSxZLE4NCk1hcmssSGFycGVyLFksWSxZLE4NClRhbWFyYSwsWSxZLFksTg0KTHVrYXMsU2FudGluZyxOLE4sWSxODQpTb3BoaWUsLE4sTixZLE4NClNhYmEsWWFyLE4sTixZLE4NCkFuZHJldyxIdWxsLE4sTixZLE4NCkNocmlzLEtvbGlvcyxOLE4sWSxODQpOaWNrLERpbG9yZXRvLE4sTixZLE4NClZhbmlhLCxOLE4sWSxODQpTaHJ1dGksU2hhaCxZLE4sWSxODQpEZXZhbnNoLFNoYWgsWSxOLFksTg0KQWtzaGFyLFNoYWgsWSxOLFksTg0KQ2VseW4sLFksTixZLE4NCkNvbHRvbixXb29kLE4sTixZLE4NCkphY29iLFZhbkhlbGRlcixZLFksWSxODQpFdmUsLFksWSxZLE4NCkVtbWV0dCxOZWhlbGksWSxZLFksTg0KRXZhbixBbmRyZXdzLFksWSxZLE4NCkRhbmllbCxIZWxkLE4sWSxZLE4NCkFyaWVsbGUsQmVyZ2VyLE4sWSxZLE4NCkJhcmJhcmEsSGVsZCxOLFksWSxODQpTdGVwaGVuLEhlbGQsTixZLFksTg0KS2FyZW4sSGVsZCxOLFksWSxODQpQZXRlcixXZWluc3RlaW4sTixZLFksTg0KU3VlLE1hcmtzLE4sWSxZLFkNCkdyZWcsTWFya3MsTixZLFksWQ0KVGVyZXphLEJhcnRhLE4sWSxZLE4NClRyaW5hLE1jUXVlZW4sTixZLFksTg0KVHJpbmEncyxHdWVzdCxOLFksWSxODQpGYWJpbyxCYXNzbyBNb250YW5hcmksTixZLFksTg0KRGlhbmEsR29sdHMsTixZLFksTg0KSG93YXJkLFdpc2VtYW4sTixZLFksTg0KVmlkeWEsSXllcixOLFksTixODQpOYXRoYW4sSXllcixOLFksTixODQpIZW1hLEt1bWFyZXNhbixOLFksWSxODQpLdW1hcmVzaCxLdW1hcmVzYW4sTixZLFksTg0KTXVzdGFwaGEsV2FoYWIsWSxZLFksTg0KTmFuZGEsS2lzaG9yZSxZLFksWSxZDQpOYW5kaW5pLEtpc2hvcmUsWSxZLFksWQ0KR2F1cmksUGF0ZWwsWSxZLFksTg0KUHJhdmluLFBhdGVsLFksWSxZLE4NCkdlZXRhbmphbGksTmFpayxZLFksWSxODQpTYW1pcixOYWlrLFksWSxZLE4NCk5lZW5hLFNoZXR0eSxZLFksWSxODQpCYWxhLFNoZXR0eSxZLFksWSxODQpQYXJ2YXRpLFNlc2hhZHJpLFksWSxZLE4NClNyaSxTZXNoYWRyaSxZLFksWSxODQpHaWxsaWFuLEl2ZXksWSxZLFksTg0KTWFyYWwsTWFmaSxZLFksWSxODQo=";
const csvData = atob(obfCsvData);

// Event details configuration
const eventDetails = {
    Mehndi: {
        title: "Haldi Mehndi",
        date: "Saturday, May 17, 2025",
        time: "1:00 PM - 5:00 PM",
        location: "Drop off Address: <a href='https://maps.app.goo.gl/2ZzvBEgQAs74fkEb6'>1286 Gatehouse Drive, Missisauga</a>",
        attire: "Attire: Indian or Bright Garden Party Attire",
        description: "Please join us for Yash & Emily’s Haldi & Mehndi, vibrant pre-wedding ceremonies hosted at the Kinis’ family home. Enjoy an afternoon of food, music, and henna artists as we celebrate the couple-to-be.",
        customHtml: `
            <p class="event-description">Parking: Please be aware there is no street parking allowed in the neighbourhood. 
            The closest lot is at <a href='https://maps.app.goo.gl/iqA1KXPEKgoU6EY48'>Jack Darling Park</a>. After parking please follow the walking path south towards Rattray Marsh Conservation Area. There will be signs at the boardwalk to guide guests to our home.</p>
            <div style="text-align: center;">
                <img src="images/jack_darling_park.png" alt="Jack Darling Park" class="event-image" style="max-width: 100%; height: auto;">
            </div>
        `
    },
    HinduCeremony: {
        title: "Hindu Ceremony",
        date: "Sunday, May 18, 2025",
        time: "9:00 AM - 2:30 PM",
        location: "<a href='https://maps.app.goo.gl/kNZM5V1Lz27JREebA'>One King West Hotel</a>",
        attire: "Attire: Formal Indian attire highly encouraged. Alternatively, guests are encouraged to wear vibrant colours. Please do not wear red.",
        description: "Join us for a traditional Hindu wedding ceremony followed by a vegetarian lunch.",
        customHtml: `
            <div class="event-container">
                <div class="sub-event">
                    <div class="sub-event-time">9:00 AM–10:00 AM</div>
                    <div class="sub-event-details">
                        <div class="sub-event-title">Baraat</div>
                        <div class="sub-event-location">King Street Entrance & Foyer, One King West</div>
                        <div class="sub-event-description">An energetic wedding procession accompanied by live drumming. Characterized by celebration and dance, the Baraat sees family and friends escort the groom to the wedding hall.</div>
                    </div>
                </div>
                <div class="sub-event">
                    <div class="sub-event-time">10:30 AM–12:30 PM</div>
                    <div class="sub-event-details">
                        <div class="sub-event-title">Ceremony</div>
                        <div class="sub-event-location">Austin Gallery, One King West</div>
                        <div class="sub-event-description">Lead by Pandit Chandrasekara Gurukkal a senior Hindu Priest, the wedding ceremony begins with blessings and the bride’s entrance. As the Panditji leads the couple through intricate traditions in the Sanskrit language, translation and explanations will be provided by our dear friend Vijay Kumar.</div>
                    </div>
                </div>
                <div class="sub-event">
                    <div class="sub-event-time">12:30 PM–2:30 PM</div>
                    <div class="sub-event-details">
                        <div class="sub-event-title">Celebration Lunch</div>
                        <div class="sub-event-location">Grand Banking Hall, One King West</div>
                        <div class="sub-event-description">A vegetarian buffet offering a wide range of authentic Indian dishes.</div>
                    </div>
                </div>
            </div>
        `
    },
    JewishCeremony: {
        title: "Jewish Ceremony & Reception",
        date: "Sunday, May 18, 2025",
        time: "5:00 PM - 1:00 AM",
        location: "<a href='https://maps.app.goo.gl/kNZM5V1Lz27JREebA'>One King West Hotel</a>",
        attire: "Attire: Formal",
        description: "Join us for a Jewish wedding ceremony, cocktail hour, dinner, and dancing.",
        customHtml: `
            <div class="event-container">
                <div class="sub-event">
                    <div class="sub-event-time">5:00 PM–6:00 PM</div>
                    <div class="sub-event-details">
                        <div class="sub-event-title">Jewish Wedding Ceremony</div>
                        <div class="sub-event-location">Austin Gallery, One King West</div>
                        <div class="sub-event-description">Lead by a Cantor, the wedding ceremony begins with the entrance of the bride and groom, each accompanied by their parents. The Cantor recites traditional blessings in both English and Hebrew. The couple exchanges rings and vows. The ceremony ends with the smashing of the glass. As the groom breaks a piece of glass underfoot, the congregation calls out “Mazel Tov!”</div>
                    </div>
                </div>
                <div class="sub-event">
                    <div class="sub-event-time">6:00 PM–7:00 PM</div>
                    <div class="sub-event-details">
                        <div class="sub-event-title">Cocktail Hour</div>
                        <div class="sub-event-location">Austin Gallery, 2nd Floor, One King West</div>
                        <div class="sub-event-description">Celebrate with hors d'oeuvres and cocktails, accompanied by a string trio.</div>
                    </div>
                </div>
                <div class="sub-event">
                    <div class="sub-event-time">7:00 PM–1:00 AM</div>
                    <div class="sub-event-details">
                        <div class="sub-event-title">Dinner & Reception</div>
                        <div class="sub-event-location">Grand Banking Hall, One King West</div>
                        <div class="sub-event-description">Join us for dinner and dancing as we celebrate our new beginning.</div>
                    </div>
                </div>
            </div>
        `
    },
    Brunch: {
        title: "Brunch",
        date: "Monday, May 19, 2025",
        time: "11:30 AM",
        location: "Details to be announced",
        attire: "Attire: Casual or Semi-Formal",
        description: "A warm goodbye brunch held for our furthest-travelled friends and relatives.",
        customHtml: `<div></div>`
    }
};

function checkGuest() {
    const debug = false;
    let firstName = document.getElementById('firstName').value.trim();
    let lastName = document.getElementById('lastName').value.trim();
    const scheduleDiv = document.getElementById('schedule');
    if (debug == true) {
        firstName = 'John';
        lastName = 'Doe';
    }

    
    // Clear previous results
    scheduleDiv.innerHTML = '';
    
    // Parse CSV
    const rows = csvData.split('\n');
    const headers = rows[0].split(',');
    
    let found = false;
    
    for(let i = 1; i < rows.length; i++) {
        const cells = rows[i].split(',');
        if(cells[0].trim().toLowerCase() === firstName.toLowerCase() && 
           cells[1].trim().toLowerCase() === lastName.toLowerCase()) {
            found = true;
            
            // Create event cards for each invited event
            for(let j = 2; j < headers.length; j++) {
                if(cells[j].trim().toUpperCase() === 'Y') {
                    const eventKey = headers[j].trim();
                    const event = eventDetails[eventKey];
                    
                    const card = document.createElement('div');
                    card.className = 'event-card visible';
                    card.innerHTML = `
                        <h2 class="event-title">${event.title}</h2>
                        <div class="event-date">${event.date}</div>
                        <div class="event-time">${event.time}</div>
                        <div class="event-location">${event.location}</div>
                        <div class="event-attire">${event.attire}</div>
                        <p class="event-description">${event.description}</p>
                        ${event.customHtml}
                    `;
                    scheduleDiv.appendChild(card);
                }
            }
            break;
        }
    }
    
    if(!found) {
        scheduleDiv.innerHTML = '<p class="error">No schedule found for this guest. Please check your name or contact the groom at yash.s.kini@gmail.com</p>';
    }
}