const obfCsvData = "Rmlyc3QgTmFtZSxMYXN0IE5hbWUsTWVobmRpLEhpbmR1Q2VyZW1vbnksSmV3aXNoQ2VyZW1vbnksQnJ1bmNoDQpFbWlseSxQYXN0ZXJuYWssWSxZLFksWQ0KRmF0ZW1haCxUYWxlYmksWSxZLFksWQ0KQnJlbixTbGF0ZXIsWSxZLFksWQ0KQW5nZWwsV2lsbGlhbXMsWSxZLFksWQ0KU2FyYWgsQnJ5bWVyLFksWSxZLFkNCkRhaGxpYSxMZXZ5LFksWSxZLFkNCkpQLCxZLFksWSxZDQpOaWNrLFdpbnNvcixZLFksWSxODQpOaWNraWUsLFksWSxZLE4NCkNhcHRhaW4sQW5raXQgQ2hhdWhhbixZLFksWSxODQpTd2F0aSxDaGF1aGFuLFksWSxZLE4NCk1pcmksVGVpY2gsWSxZLFksTg0KVG9tbWFzbyxDYWNpb2xsaSxZLFksWSxODQpZaWZhbixXYW5nLFksWSxZLE4NCllvdW5lcyxQYXJ2aW4sWSxZLFksTg0KWW91bmVzJ3MsR3Vlc3QsWSxZLFksTg0KVGVqYXN2aSxSYWogU2FnYXIsWSxZLFksTg0KS3VkcmF0LEthaGxvbixZLFksWSxODQpQcmFhdGlrYSxNZWhyYSxZLFksWSxODQpTaWRkaGFydGgsRGF2ZSxZLFksWSxODQpEYXZpZCxKZXNpbixOLFksWSxODQpBbmRyw6lhLE1vcnJpcyxOLFksWSxODQpKb2UsTW9ycmlzLE4sWSxZLE4NCkFuZHJlYSxIaXJzY2hlaW1lcixZLFksWSxZDQpTdGVwaGVuLFBhc3Rlcm5hayxZLFksWSxZDQpNZWxpc3NhLFBhc3Rlcm5hayxZLFksWSxZDQpNZWxpc3NhJ3MsR3Vlc3QsWSxZLFksWQ0KQWxhbmEsUGFzdGVybmFrLFksWSxZLFkNCkFsYW5hJ3MsZ3Vlc3QgKEtpcmFuKSxZLFksWSxZDQpBbmRyZXcsUGFzdGVybmFrLFksWSxZLFkNCk1heGluZSxLYXR6LFksWSxZLFkNCkRhdmlkLFBhc3Rlcm5hayxZLFksWSxZDQpBbGFuLFBhc3RlcixZLFksWSxZDQpMb2lzLEJlaW5zdG9jayxZLFksWSxZDQpQaHlsbGlzLFBhc3RlcixZLFksWSxZDQpTdXphbm5lLE1vcmFuLFksWSxZLFkNClRvbnksQmVyYXJkaSxZLFksWSxZDQpJc2FiZWwsTW9yYW4sWSxZLFksWQ0KQnJhZCxDcm9uayxZLFksWSxZDQpCb2IsU3V0ZXIsWSxZLFksWQ0KVmFsLFN1dGVyLFksWSxZLFkNClN1c2FuLE1lcmlhbm8sWSxZLFksWQ0KS2VuLE1lcmlhbm8sWSxZLFksWQ0KQWlsZW5lLFdpdHRzdGVpbixZLFksWSxZDQpTdGVwaGVuLEZlcmd1c29uLE4sWSxZLFkNCkNhdGhlcmluZSxGZXJndXNvbixOLFksWSxZDQpXZW5keSxQZXRlcnMsWSxZLFksTg0KR29yZGllLFBldGVycyxZLFksWSxODQpLYXJlbixIYWxwZXJuLFksWSxZLE4NClJhbixNaWRyb25pLFksWSxZLE4NClRhbGlhLFdvbGZlLFksWSxZLE4NCk5vYSxXb2xmZSxZLFksWSxODQpBbGFuLEtvc2JlcmcsWSxZLFksWQ0KRG9ubmEsU3VsbGl2YW4sWSxZLFksWQ0KUm9iZXJ0LEhpcnNjaGVpbWVyLFksWSxZLFkNCk1hcmxhLEZveCxZLFksWSxZDQpKdXN0aW4sSGlyc2NoZWltZXIsWSxZLFksWQ0KSmVubmlmZXIsSGlyc2NoZWltZXIsWSxZLFksWQ0KTGluZHNheSxIaXJzY2hlaW1lcixZLFksWSxZDQpSaXRhLEhpcnNjaGVpbWVyLFksWSxZLFkNCk1hdXJpZSxCZXJnbWFuLFksWSxZLFkNClRyYWNpZSxWYW4gS2Vzc2VsLE4sWSxZLFkNCk1hcnR5LFZhbiBLZXNzZWwsTixZLFksWQ0KU2VhbixDcmVhZ2FuLE4sWSxZLFkNClRhbWFyYSxDcmVhZ2FuLE4sWSxZLFkNClBlbm55LE1hY0RvbmFsZCxOLFksWSxZDQpIb29tYW4sR2FuamF2aSxOLFksWSxZDQpTaGF3bixXaGl0ZWhlYWQsTixZLFksWQ0KRWxpc3NhLEh1bmtpbmcsTixZLFksWQ0KUm9iLEJhcnRoYSxOLFksWSxZDQpDaGFybGVuZSxCYXJ0aGEsTixZLFksWQ0KRWxhbm5hLENsYXJrLE4sWSxZLFkNCk1pY2hhZWwsQ2xhcmssTixZLFksWQ0KTGl6LEZpbmdlcixOLFksWSxZDQpEZXJlayxNaXRjaGVsbCxOLFksWSxZDQpWYWxzYSxUaG9tYXMsWSxZLFksWQ0KR2VvcmdlLFRob21hcyxZLFksWSxZDQpBbGV4YW5kcmUsTWFsdHNldixZLFksWSxZDQpUZXJyeSxXcmlnaHQsWSxZLFksWQ0KRGViLExldnksWSxZLFksWQ0KQ2FybWksTGV2eSxZLFksWSxZDQpOb2FoLExldnksWSxZLFksWQ0KS2F0aWUsRmxhbm5lcnksWSxZLFksWQ0KRGViYmllLExheGVyLFksWSxZLFkNCkZhYmlhbixHb3JvZHppbnNreSxZLFksWSxZDQpKYW5pY2UsR29yb2R6aW5za3ksWSxZLFksWQ0KUmVuYSxTaGVza2luLFksWSxZLFkNCkdyYW50LFN0aXJsaW5nLFksWSxZLFkNCkVyaWNhLFJlc2hlZixZLFksWSxZDQpIdWdvLFJlc2hlZixZLFksWSxZDQpSYWNoZWxsZSxGcnlkbWFuLE4sWSxZLFkNCldpbGxpYW0sRnJ5ZG1hbixOLFksWSxZDQpFbHlzZSxGcnlkbWFuLE4sWSxZLFkNCkphcmVkLEdhZmZlLE4sWSxZLFkNClN0ZXZlbixEYWluLE4sWSxZLFkNClN0ZXBoYW5pZSxMb29tZXIsTixZLFksWQ0KQ2Fyb2wsTWFyY3VzLFksWSxZLFkNClRlcnJ5LE1hcmN1cyxZLFksWSxZDQpOb2FoLE1hcmN1cyxZLFksWSxZDQpDaGVyeWwsTWl0Y2hlbGwsWSxZLFksWQ0KQXNoZXIsTWFyY3VzLFksWSxZLFkNCkR1ZmZ5LE/igJlDcmF2ZW4sWSxZLFksWQ0KTmFuY3ksR29sZGJlcmcsWSxZLFksWQ0KU2FuZHJhLEdyb3NzLFksWSxZLFkNCkx1aXosR3Jvc3MsWSxZLFksWQ0KU3V6eSxHcm9zcyxZLFksWSxZDQpOaWNvbGUsR3Jvc3MsWSxZLFksWQ0KR3VzdGF2byxHcm9zcyxZLFksWSxZDQpHaWRlb24sR29sYW4sWSxZLFksWQ0KWWFlbCxHb2xhbixZLFksWSxZDQpNYXlhLEdvbGFuLFksWSxZLFkNCkFkaSxHb2xhbixZLFksWSxZDQpJdGFpLEdvbGFuLFksWSxZLFkNCkJlbmppLEdvbGFuLFksWSxZLFkNClZlcmVkLEdvbGFuLFksWSxZLFkNCk9yLEdvbGFuLFksWSxZLFkNCkxpLEdvbGFuLFksWSxZLFkNCkJhcixHb2xhbixZLFksWSxZDQpMaW1vcixTaHVrZXIsWSxZLFksWQ0KU2hhaSxTaGFsZXYsWSxZLFksWQ0KQW1pdCxTaGFsZXYsWSxZLFksWQ0KRGF2ZSxPbHNlbixZLE4sWSxODQpTaGVsbGV5LE9sc2VuLFksTixZLE4NCllhc2gsS2luaSxZLFksWSxZDQpWaXZlayxOYXlhayxZLFksWSxODQpBbml0YSxOYXlhayxZLFksWSxODQpQcmFtb2QsQmhhdCxZLE4sWSxODQpQcmF2YWRhLEJoYXQsWSxOLFksTg0KUHJhdGhhLEJoYXQsWSxOLFksTg0KQWpheSxSYW8sWSxOLFksTg0KQ2hpdHJhLFJhbyxZLE4sWSxODQpBbmp1LFBhaSxZLE4sWSxODQpQcmF2ZWVuLFBhaSxZLE4sWSxODQpQb29uYW0sR3VwdGEsTixZLE4sTg0KUHJhdmVlbixHdXB0YSxOLFksTixODQpCZWVuYSxQYXJla2gsTixZLE4sTg0KSGFyc2hhZCxQYXJla2gsTixZLE4sTg0KQmVlbmEsUGFyZWtoLE4sWSxOLE4NCkFudWosTWFkYW4sTixOLFksTg0KQW51aidzLEd1ZXN0LE4sTixZLE4NClZpamF5LEt1bWFyLFksWSxZLE4NCkFuaW5kaXRhLEt1bWFyLFksWSxZLE4NCixNcnMuIE1haGFudGksWSxZLFksTg0KQWRpdGksTmFpZHUsWSxZLFksTg0KQWJoYXksS3VtYXIsWSxZLFksTg0KWWFuYSxLdW1hcixZLFksWSxODQpLcmlzaCxOYWlkdSxZLFksWSxODQpWYXNhbnRoaSxOYWlkdSxZLFksWSxODQpNYW5nZXNoLE1hdmluS3VydmUsWSxZLE4sTg0KTWVnaG5hLE1hdmluS3VydmUsWSxZLE4sTg0KR3VydWR1dHQsTWF2aW5LdXJ2ZSxOLFksTixODQpTYWRoYW5hLE1hdmluS3VydmUsTixZLE4sTg0KTmVlcmFqLE1hdmluS3VydmUsWSxZLE4sTg0KTWFpdGhpbGksTWF2aW5LdXJ2ZSxZLFksTixODQpQcmFkZWVwLE5haXIsTixOLFksTg0KTmluYSxOYWlyLE4sTixZLE4NCk1hbm9qLFNyaXZhc3RhdmEsTixOLFksTg0KTW9uYSxTcml2YXN0YXZhLE4sTixZLE4NClN1ZGhpcixQdW5qYWJpLE4sTixZLE4NCk5lZXJqYSxQdW5qYWJpLE4sTixZLE4NCkNoaW50YW4sSmFpbixOLE4sWSxODQpNb25pY2EsSmFpbixOLE4sWSxODQpCaGFza2FyLENob3dkaHVyeSxZLFksWSxODQpOaWxhLENob3dkaHVyeSxZLFksWSxODQpNdXJhbGksSXllcixOLFksTixODQpHZWV0YSxJeWVyLE4sWSxOLE4NCkNoaW5vbyxCYWxpZ2EsWSxZLFksWQ0KUnVwYSxCYWxpZ2EsWSxZLFksWQ0KS2F1c2hpayxCYWxpZ2EsWSxZLFksWQ0KVGFwb3NoaSxQYWksTixZLE4sTg0KVXBlbmRyYSxQYWksTixZLE4sTg0KU3V2YXJuYSxNYW5raWthcixOLFksTixODQpTYWRhbmFuYW5kLE1hbmtpa2FyLE4sWSxOLE4NCk1hbm9qLFBhaSxZLFksWSxODQpTYXZpdGEsUGFpLFksWSxZLE4NCkFrc2hhdCxQYWksWSxZLFksTg0KQWR2YWl0aCxQYWksWSxZLFksTg0KQWtzaGF0J3MsUGFydG5lcixZLFksWSxODQpBZHZhaXRoJ3MsUGFydG5lcixZLFksWSxODQpTYWNoaW4sU2hlbm95LFksWSxZLE4NCkFrc2hhdGEsU2hlbm95LFksWSxZLE4NClNhbnRvc2gsS2luaSxZLFksWSxZDQpFbHMsS2luaSxZLFksWSxZDQpOaW1heSxLaW5pLFksWSxZLFkNCk5pbGF5YSxLaW5pLFksWSxZLFkNCkRpbmVzaCxQYWksWSxZLFksWQ0KQW5pdGEsUGFpLFksWSxZLFkNCkFkaXR5YSxQYWksWSxZLFksWQ0KU2FyYWgsT2xzZW4sWSxZLFksWQ0KS2FydGhpayxLaW5pLFksWSxZLFkNClJhZ2h1dmVlcixOYXlhayxZLFksWSxZDQpBbml0YSxOYXlhayxZLFksWSxZDQpOYW5kaW5pLE5heWFrLFksWSxZLFkNClNpZCxOYXlhayxZLFksWSxZDQpQcmFrYXNoLE5heWFrLFksWSxZLFkNClNhbmpveSxQcmFiaHUsWSxZLFksWQ0KU2FuZGh5YSxQcmFiaHUsWSxZLFksWQ0KQXJ1bixQcmFiaHUsWSxZLFksWQ0KTWFkaGF2LEtpbmksWSxZLFksWQ0KU2FuamFtLEtpbmksWSxZLFksWQ0KQW5pLEtpbmksWSxZLFksWQ0KVGFuaXNoa2EsS2luaSxZLFksWSxZDQpWYXNhbnQsQmFsaWdhLFksWSxZLFkNCk1vbmljYSxCYWxpZ2EsWSxZLFksWQ0KR2F5YXRyaSxLaW5pLFksWSxZLFkNClNhbmp1LEtpbmksWSxZLFksWQ0KUm9oYW4sS2luaSxZLFksWSxZDQpSaW5rdSxLaW5pLFksWSxZLFkNClJhaHVsLEtpbmksWSxZLFksWQ0KUmlua3UncyxHdWVzdCxZLFksWSxZDQpMZWVuYSxEZW9kaGFyZSxZLE4sWSxODQpTYW5qZWV2LERlb2RoYXJlLFksTixZLE4NCkFuanVsaSxEZW9kaGFyZSxZLE4sWSxODQpOYW1pdGEsRGVvZGhhcmUsWSxOLFksTg0KTml0aW4sU2F3YW50LFksWSxZLE4NCkphc21pbmUsU2F3YW50LFksWSxZLE4NClNpZGRoYW50LFNhd2FudCxZLE4sWSxODQpFbGx5LFNhd2FudCxZLE4sWSxODQpWaWpheSxTaGlyb2RrYXIsTixZLE4sTg0KQXBhcm5hLFNoaXJvZGthcixOLFksTixODQpNZWRoYSxEYXRlLFksTixZLE4NClByYWthc2gsRGF0ZSxZLE4sWSxODQpNb25pc2hhLERhdGUsWSxOLFksTg0KUmF2aSxLYXJndXRrYXIsWSxOLFksTg0KTWVlcmF0YWksS2FyZ3V0a2FyLFksTixZLE4NClJhbmksTmVuZSxOLE4sWSxODQpNaWxpbmQsTmVuZSxOLE4sWSxODQpLcnV0aWthLE5lbmUsTixOLFksTg0KU3dhdGksVmFpZHlhLE4sTixZLE4NCkFiaGF5LFZhaWR5YSxOLE4sWSxODQpTdWplZXQsS2luaSxZLFksWSxZDQpWYW5pdGEsS2luaSxZLFksWSxZDQpUd2lzaGEsS2luaSxZLFksWSxZDQpBbWFyLCxZLFksWSxZDQpLYXRoZXJpbmUsUGFjaXMsTixZLE4sTg0KS2F0aGVyaW5lJ3MsUGFydG5lcixOLFksTixODQpTaGFsaW5pLFNoZXRoLFksTixZLE4NClN1bmlsLFNoZXRoLFksTixZLE4NCkJlbm5ldHQsUm91bGVhdSxZLFksWSxZDQpJc2FiZWxsYSxHcmVjbyxZLFksWSxZDQpUaG9tYXMsU3llcixZLFksWSxZDQpNaWNoYWVsLExld2lzLFksWSxZLE4NCkt5bGUsQ29uc3RhbnRpbixZLFksWSxODQpSb2JlcnQsTGF6aWVyLFksWSxZLE4NCktpbSxMYW5nYXQsWSxZLFksTg0KQWlkYW4sQmxhY2ttb3JlLE4sTixZLE4NCkFtYW5kYSwsTixOLFksTg0KQWRyaWFuLEZpbGljZSxZLFksWSxODQpUZXJyaSxKb25lcyxZLFksWSxODQpNb2xseSxSZWV2ZXMsWSxZLFksTg0KQWxlamFuZHJhLE1lemEsWSxZLFksTg0KUnlhbixCZW5uZXR0LFksWSxZLE4NCk1hcmssSGFycGVyLFksWSxZLE4NClRhbWFyYSwsWSxZLFksTg0KTHVrYXMsU2FudGluZyxOLE4sWSxODQpTb3BoaWUsLE4sTixZLE4NClNhYmEsWWFyLE4sTixZLE4NCkFuZHJldyxIdWxsLE4sTixZLE4NCkNocmlzLEtvbGlvcyxOLE4sWSxODQpOaWNrLERpbG9yZXRvLE4sTixZLE4NClZhbmlhLCxOLE4sWSxODQpTaHJ1dGksU2hhaCxZLE4sWSxODQpEZXZhbnNoLFNoYWgsWSxOLFksTg0KQWtzaGFyLFNoYWgsWSxOLFksTg0KQ2VseW4sLFksTixZLE4NCkNvbHRvbixXb29kLE4sTixZLE4NCkplc3NpY2EsUmFtb3MsTixOLFksTg0KSmFjb2IsVmFuSGVsZGVyLFksWSxZLE4NCkV2ZSwsWSxZLFksTg0KRW1tZXR0LE5laGVsaSxZLFksWSxODQpFdmFuLEFuZHJld3MsWSxZLFksTg0KQmFyYmFyYSxIZWxkLE4sWSxZLE4NClN0ZXBoZW4sSGVsZCxOLFksWSxODQpEYW5pZWwsSGVsZCxOLFksWSxODQpBcmllbGxlLEJlcmdlcixOLFksWSxODQpLYXJlbixIZWxkLE4sWSxZLE4NClBldGVyLFdlaW5zdGVpbixOLFksWSxODQpTdWUsTWFya3MsTixZLFksWQ0KR3JlZyxNYXJrcyxOLFksWSxZDQpIb3dhcmQsV2lzZW1hbixOLFksWSxODQpUZXJlemEsQmFydGEsTixZLFksTg0KVHJpbmEsTWNRdWVlbixOLFksWSxODQpUcmluYSdzLEd1ZXN0LE4sWSxZLE4NCkZhYmlvLEJhc3NvIE1vbnRhbmFyaSxOLFksWSxODQpEaWFuYSxHb2x0cyxOLFksWSxODQpWaWR5YSxJeWVyLE4sWSxOLE4NCk5hdGhhbixJeWVyLE4sWSxOLE4NCkhlbWEsS3VtYXJlc2FuLE4sWSxZLE4NCkt1bWFyZXNoLEt1bWFyZXNhbixOLFksWSxODQpNdXN0YXBoYSxXYWhhYixZLFksWSxODQpOYW5kYSxLaXNob3JlLFksWSxZLFkNCk5hbmRpbmksS2lzaG9yZSxZLFksWSxZDQpHYXVyaSxQYXRlbCxZLFksWSxODQpQcmF2aW4sUGF0ZWwsWSxZLFksTg0KR2VldGFuamFsaSxOYWlrLFksWSxZLE4NClNhbWlyLE5haWssWSxZLFksTg0KTmVlbmEsU2hldHR5LFksWSxZLE4NCkJhbGEsU2hldHR5LFksWSxZLE4NClBhcnZhdGksU2VzaGFkcmksWSxZLFksTg0KU3JpLFNlc2hhZHJpLFksWSxZLE4NCkdpbGxpYW4sSXZleSxZLE4sWSxODQpNYXJhbCxNYWZpLFksTixZLE4NCk1heWEsTWFsbGFyLFksWSxZLFkNCk1heWEncyxHdWVzdCxZLFksWSxZDQpEaXZ5YSxLaW5pLFksWSxZLFkNCkFiaGlqaXQsS2luaSxZLFksWSxZDQpEaXZ5YSdzLEd1ZXN0LFksWSxZLFkNCkRpdnlhJ3MsR3Vlc3QsWSxZLFksWQ0K";
const csvData = atob(obfCsvData);

// Event details configuration
const eventDetails = {
    Mehndi: {
        title: "Haldi Mehndi",
        date: "Saturday, May 17, 2025",
        time: "12:00 PM - 5:00 PM",
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