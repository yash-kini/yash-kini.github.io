const obfCsvData = "Rmlyc3QgTmFtZSxMYXN0IE5hbWUsTWVobmRpLEhpbmR1Q2VyZW1vbnksSmV3aXNoQ2VyZW1vbnksQnJ1bmNoDQpFbWlseSxQYXN0ZXJuYWssWSxZLFksWQ0KRmF0ZW1haCxUYWxlYmksWSxZLFksWQ0KQnJlbixTbGF0ZXIsTixOLE4sTg0KQW5nZWwsV2lsbGlhbXMsTixOLE4sTg0KRGFobGlhLExldnksWSxZLFksWQ0KSlAsSHVuZyxOLFksWSxODQpOaWNrLFdpbnNvcixZLFksWSxODQpOaWNraWUsTWFydGluLFksWSxZLE4NCkNhcHRhaW4sQW5raXQgQ2hhdWhhbixZLFksWSxODQpTd2F0aSxDaGF1aGFuLFksWSxZLE4NCk1pcmksVGVpY2gsWSxZLFksTg0KVG9tbWFzbyxDYWNpb2xsaSxZLFksWSxODQpZaWZhbixXYW5nLFksWSxZLE4NCkFteSxMaSxOLE4sWSxODQpZb3VuZXMsUGFydmluLFksWSxZLE4NCk1haHNhLE1va2hsZXNhYmFkaSxZLFksWSxODQpUZWphc3ZpLFJhaiBTYWdhcixZLFksWSxODQpLdWRyYXQsS2FobG9uLFksWSxZLE4NClByYWF0aWthLE1laHJhLFksWSxZLE4NClNpZGRoYXJ0aCxEYXZlLE4sTixOLE4NCkRhdmlkLEplc2luLE4sTixZLE4NCkFuZHLDqWEsTW9ycmlzLE4sTixOLE4NCkpvZSxNb3JyaXMsTixOLE4sTg0KQW5kcmVhLEhpcnNjaGVpbWVyLFksWSxZLFkNClN0ZXBoZW4sUGFzdGVybmFrLFksWSxZLFkNCk1lbGlzc2EsUGFzdGVybmFrLFksWSxZLFkNCkFzaGxlZSxIYXJwZXIsWSxZLFksWQ0KQWxhbmEsUGFzdGVybmFrLFksWSxZLFkNCktpcmFuLExhcnNlbixZLFksWSxZDQpBbmRyZXcsUGFzdGVybmFrLFksWSxZLFkNCk1heGluZSxLYXR6LFksWSxZLFkNCkRhdmlkLFBhc3Rlcm5hayxZLFksWSxZDQpBbGFuLFBhc3RlcixOLE4sTixODQpMb2lzLEJlaW5zdG9jayxOLE4sTixODQpQaHlsbGlzLFBhc3RlcixOLE4sTixODQpTdXphbm5lLE1vcmFuLFksWSxZLFkNClRvbnksQmVyYXJkaSxZLFksWSxZDQpJc2FiZWwsTW9yYW4sTixOLE4sTg0KQnJhZCxDcm9uayxOLE4sTixODQpCb2IsU3V0ZXIsTixOLE4sTg0KVmFsLFN1dGVyLE4sTixOLE4NClN1c2FuLE1lcmlhbm8sTixZLFksTg0KS2VuLE1lcmlhbm8sTixOLE4sTg0KQWlsZW5lLFdpdHRzdGVpbixOLFksWSxODQpTdGVwaGVuLEZlcmd1c29uLE4sWSxZLFkNCkNhdGhlcmluZSxGZXJndXNvbixOLFksWSxZDQpXZW5keSxQZXRlcnMsTixOLE4sTg0KR29yZGllLFBldGVycyxOLE4sTixODQpLYXJlbixIYWxwZXJuLE4sWSxOLE4NClJhbixNaWRyb25pLE4sTixOLE4NClRhbGlhLFdvbGZlLE4sTixOLE4NCk5vYSxXb2xmZSxOLFksTixODQpBbGFuLEtvc2JlcmcsWSxZLFksTg0KRG9ubmEsU3VsbGl2YW4sWSxZLFksTg0KUm9iZXJ0LEhpcnNjaGVpbWVyLFksWSxZLFkNCk1hcmxhLEZveCxZLFksWSxZDQpKdXN0aW4sSGlyc2NoZWltZXIsWSxZLFksWQ0KSmVubmlmZXIsSGlyc2NoZWltZXIsWSxZLFksWQ0KTGluZHNheSxIaXJzY2hlaW1lcixZLFksWSxZDQpSaXRhLEhpcnNjaGVpbWVyLE4sTixOLE4NCk1hdXJpZSxCZXJnbWFuLE4sTixOLE4NClRyYWNpZSxWYW4gS2Vzc2VsLE4sWSxZLE4NCk1hcnR5LFZhbiBLZXNzZWwsTixZLFksTg0KU2VhbixDcmVhZ2FuLE4sWSxZLE4NClRhbWFyYSxDcmVhZ2FuLE4sWSxZLE4NClBlbm55LE1hY0RvbmFsZCxOLFksWSxZDQpIb29tYW4sR2FuamF2aSxOLFksWSxZDQpTaGF3bixXaGl0ZWhlYWQsTixOLE4sTg0KRWxpc3NhLEh1bmtpbmcsTixOLE4sTg0KUm9iLEJhcnRoYSxOLE4sTixODQpDaGFybGVuZSxCYXJ0aGEsTixOLE4sTg0KRWxhbm5hLENsYXJrLE4sWSxZLE4NCk1pY2hhZWwsQ2xhcmssTixZLFksTg0KTGl6LEZpbmdlcixOLE4sTixODQpEZXJlayxNaXRjaGVsbCxOLE4sTixODQpWYWxzYSxUaG9tYXMsTixZLFksTg0KR2VvcmdlLFRob21hcyxOLE4sTixODQpBbGV4YW5kcmUsTWFsdHNldixZLFksWSxZDQpUZXJyeSxXcmlnaHQsWSxZLFksWQ0KRGViLExldnksWSxZLFksWQ0KQ2FybWksTGV2eSxZLFksWSxZDQpOb2FoLExldnksWSxZLFksWQ0KS2F0aWUsRmxhbm5lcnksWSxZLFksWQ0KRGViYmllLExheGVyLFksWSxZLFkNCkZhYmlhbixHb3JvZHppbnNreSxOLFksWSxZDQpKYW5pY2UsR29yb2R6aW5za3ksTixZLFksWQ0KUmVuYSxTaGVza2luLFksWSxZLFkNCkdyYW50LFN0aXJsaW5nLFksWSxZLFkNCkVyaWNhLFJlc2hlZixOLFksWSxODQpIdWdvLFJlc2hlZixOLFksWSxODQpSYWNoZWxsZSxGcnlkbWFuLE4sTixZLE4NCldpbGxpYW0sRnJ5ZG1hbixOLE4sWSxODQpFbHlzZSxGcnlkbWFuLE4sTixOLE4NCkphcmVkLEdhZmZlLE4sTixOLE4NClN0ZXZlbixEYWluLE4sWSxZLFkNClN0ZXBoYW5pZSxMb29tZXIsTixZLFksWQ0KQ2Fyb2wsTWFyY3VzLFksWSxZLFkNClRlcnJ5LE1hcmN1cyxZLFksWSxZDQpOb2FoLE1hcmN1cyxZLFksWSxZDQpDaGVyeWwsTWl0Y2hlbGwsWSxZLFksWQ0KQXNoZXIsTWFyY3VzLFksWSxZLFkNCkR1ZmZ5LE/igJlDcmF2ZW4sWSxZLFksWQ0KTmFuY3ksR29sZGJlcmcsWSxZLFksWQ0KU2FuZHJhLEdyb3NzLFksWSxZLFkNCkx1aXosR3Jvc3MsWSxZLFksWQ0KU3V6eSxHcm9zcyxOLE4sTixODQpOaWNvbGUsR3Jvc3MsTixOLE4sTg0KR3VzdGF2byxHcm9zcyxOLE4sTixODQpHaWRlb24sR29sYW4sWSxZLFksWQ0KWWFlbCxHb2xhbixZLFksWSxZDQpNYXlhLEdvbGFuLFksWSxZLFkNCkFkaSxHb2xhbixZLFksWSxZDQpJdGFpLEdvbGFuLE4sTixOLE4NCkJlbmppLEdvbGFuLE4sTixOLE4NClZlcmVkLEdvbGFuLE4sTixOLE4NCk9yLEdvbGFuLE4sTixOLE4NCkxpLEdvbGFuLE4sTixOLE4NCkJhcixHb2xhbixOLE4sTixODQpMaW1vcixTaHVrZXIsTixOLE4sTg0KU2hheSxTaGFsZXYsWSxZLFksWQ0KQW1pdCxTaGFsZXYsWSxZLFksWQ0KRGF2ZSxPbHNlbixOLE4sWSxODQpTaGVsbGV5LE9sc2VuLE4sTixZLE4NCllhc2gsS2luaSxZLFksWSxZDQpWaXZlayxOYXlhayxZLFksWSxODQpBbml0YSxOYXlhayxZLFksWSxODQpQcmFtb2QsQmhhdCxZLFksWSxODQpQcmF2YWRhLEJoYXQsWSxZLFksTg0KUHJhdGhhLEJoYXQsWSxZLFksTg0KQWpheSxSYW8sWSxZLFksTg0KQ2hpdHJhLFJhbyxZLFksWSxODQpBbmp1LFBhaSxZLE4sWSxODQpQcmF2ZWVuLFBhaSxZLE4sWSxODQpQb29uYW0sR3VwdGEsTixZLE4sTg0KUHJhdmVlbixHdXB0YSxOLFksTixODQpCZWVuYSxQYXJla2gsTixOLE4sTg0KSGFyc2hhZCxQYXJla2gsTixOLE4sTg0KQmVlbmEsUGFyZWtoLE4sTixOLE4NCkFudWosTWFkYW4sTixOLFksTg0KQW51aidzLEd1ZXN0LE4sTixOLE4NClZpamF5LEt1bWFyLFksWSxZLE4NCkFuaW5kaXRhLEt1bWFyLFksWSxZLE4NCkthbWFsYSxNYWhhbnRpLFksWSxZLE4NCkFkaXRpLE5haWR1LFksWSxZLE4NCkFiaGF5LEt1bWFyLFksWSxZLE4NCllhbmEsS3VtYXIsWSxZLFksTg0KS3Jpc2gsTmFpZHUsWSxZLFksTg0KVmFzYW50aGksTmFpZHUsWSxZLFksTg0KTWFuZ2VzaCxNYXZpbkt1cnZlLFksWSxZLE4NCk1lZ2huYSxNYXZpbkt1cnZlLFksWSxZLE4NCkd1cnVkdXR0LE1hdmluS3VydmUsTixZLE4sTg0KU2FkaGFuYSxNYXZpbkt1cnZlLE4sWSxOLE4NCk5pcmFqLFRoYW1iaW5heWFnYW0sTixZLFksTg0KTWFpdGhpbGksVGhhbWJpbmF5YWdhbSxOLFksWSxODQpQcmFkZWVwLE5haXIsTixOLFksTg0KTmluYSxOYWlyLE4sTixZLE4NCk1hbm9qLFNyaXZhc3RhdmEsTixOLFksTg0KTW9uYSxTcml2YXN0YXZhLE4sTixZLE4NClN1ZGhpcixQdW5qYWJpLE4sTixOLE4NCk5lZXJqYSxQdW5qYWJpLE4sTixOLE4NCkNoaW50YW4sSmFpbixOLE4sWSxODQpNb25pY2EsSmFpbixOLE4sWSxODQpCaGFza2FyLENob3dkaHVyeSxZLFksWSxODQpOaWxhLENob3dkaHVyeSxZLFksWSxODQpNdXJhbGksSXllcixOLFksTixODQpHZWV0YSxJeWVyLE4sWSxOLE4NCkNoaW5vbyxCYWxpZ2EsWSxZLFksTg0KUnVwYSxCYWxpZ2EsWSxZLFksTg0KS2F1c2hpayxCYWxpZ2EsWSxZLFksTg0KVGFwb3NoaSxQYWksTixOLE4sTg0KVXBlbmRyYSxQYWksTixOLE4sTg0KU3V2YXJuYSxNYW5raWthcixOLFksTixODQpTYWRhbmFuYW5kLE1hbmtpa2FyLE4sWSxOLE4NCk1hbm9qLFBhaSxZLFksWSxODQpTYXZpdGEsUGFpLFksWSxZLE4NCkFrc2hhdCxQYWksTixOLE4sTg0KQWR2YWl0aCxQYWksTixOLE4sTg0KQWtzaGF0J3MsUGFydG5lcixOLE4sTixODQpBZHZhaXRoJ3MsUGFydG5lcixOLE4sTixODQpTYWNoaW4sU2hlbm95LFksWSxZLE4NCkFrc2hhdGEsU2hlbm95LFksWSxZLE4NClNhbnRvc2gsS2luaSxZLFksWSxZDQpFbHMsS2luaSxOLE4sTixODQpOaW1heSxLaW5pLE4sTixOLE4NCk5pbGF5YSxLaW5pLE4sTixOLE4NCkRpbmVzaCxQYWksWSxZLFksWQ0KQW5pdGEsUGFpLFksWSxZLFkNCkFkaXR5YSxQYWksTixOLE4sTg0KU2FyYWgsT2xzZW4sTixOLE4sTg0KS2FydGhpayxLaW5pLE4sTixOLE4NClJhZ2h1dmVlcixOYXlhayxZLFksWSxODQpBbml0YSxOYXlhayxZLFksWSxODQpOYW5kaW5pLE5heWFrLFksWSxZLFkNClNpZCxOYXlhayxOLE4sTixODQpQcmFrYXNoLE5heWFrLFksWSxZLFkNClNhbmpveSxQcmFiaHUsWSxZLFksWQ0KU2FuZGh5YSxQcmFiaHUsWSxZLFksWQ0KQXJ1bixQcmFiaHUsWSxZLFksTg0KTWFkaGF2LEtpbmksTixOLE4sTg0KU2FuamFtLEtpbmksTixOLE4sTg0KQW5pLEtpbmksTixOLE4sTg0KVGFuaXNoa2EsS2luaSxOLE4sTixODQpWYXNhbnQsQmFsaWdhLFksWSxZLFkNCk1vbmljYSxCYWxpZ2EsWSxZLFksWQ0KR2F5YXRyaSxLaW5pLFksWSxZLE4NClNhbmp1LEtpbmksWSxZLFksTg0KUm9oYW4sS2luaSxOLE4sTixODQpSaW5rdSxLaW5pLFksWSxZLFkNClJhaHVsLEtpbmksWSxZLFksWQ0KVHJpc2hhLCxOLE4sTixODQpMZWVuYSxEZW9kaGFyZSxOLE4sTixODQpTYW5qZWV2LERlb2RoYXJlLE4sTixOLE4NCkFuanVsaSxEZW9kaGFyZSxOLE4sTixODQpOYW1pdGEsRGVvZGhhcmUsTixOLE4sTg0KTml0aW4sU2F3YW50LE4sWSxZLE4NCkphc21pbmUsU2F3YW50LE4sWSxZLE4NClNpZGRoYW50LFNhd2FudCxZLE4sWSxODQpFbGx5LFNhd2FudCxZLE4sWSxODQpWaWpheSxTaGlyb2RrYXIsTixZLE4sTg0KQXBhcm5hLFNoaXJvZGthcixOLFksTixODQpNZWRoYSxEYXRlLFksWSxZLE4NClByYWthc2gsRGF0ZSxZLFksWSxODQpNb25pc2hhLERhdGUsWSxZLFksTg0KUmF2aSxLYXJndXRrYXIsWSxZLFksTg0KTWVlcmF0YWksS2FyZ3V0a2FyLFksWSxZLE4NClJhbmksTmVuZSxOLE4sTixODQpNaWxpbmQsTmVuZSxOLE4sTixODQpLcnV0aWthLE5lbmUsTixOLE4sTg0KU3dhdGksVmFpZHlhLFksWSxZLE4NCkFiaGF5LFZhaWR5YSxZLFksWSxODQpTdWplZXQsS2luaSxZLFksWSxZDQpWYW5pdGEsS2luaSxZLFksWSxZDQpUd2lzaGEsS2luaSxZLFksWSxZDQpBbWFyamVldCxTYWh1LFksWSxZLFkNCkthdGhlcmluZSxQYWNpcyxOLE4sTixODQpLYXRoZXJpbmUncyxQYXJ0bmVyLE4sTixOLE4NClNoYWxpbmksU2hldGgsTixOLE4sTg0KU3VuaWwsU2hldGgsTixOLE4sTg0KQmVubmV0dCxSb3VsZWF1LFksWSxZLFkNCklzYWJlbGxhLEdyZWNvLFksWSxZLFkNClRob21hcyxTeWVyLFksWSxZLFkNCk1pY2hhZWwsTGV3aXMsWSxZLFksTg0KS3lsZSxDb25zdGFudGluLE4sWSxOLE4NClJvYmVydCxMYXppZXIsWSxZLFksTg0KS2ltLExhbmdhdCxZLFksWSxODQpBaWRhbixCbGFja21vcmUsWSxOLFksTg0KQW1hbmRhLEhpbGwsWSxOLFksTg0KQWRyaWFuLEZpbGljZSxZLFksWSxODQpUZXJyaSxKb25lcyxZLFksWSxODQpNb2xseSxSZWV2ZXMsWSxZLFksTg0KQWxlamFuZHJhLE1lemEsWSxZLFksTg0KUnlhbixCZW5uZXR0LFksWSxZLE4NCk1hcmssSGFycGVyLE4sTixOLE4NClRhbWFyYSwsTixOLE4sTg0KTHVrYXMsU2FudGluZyxOLE4sWSxODQpTb3BoaWUsRXJkbWFubixOLE4sWSxODQpTYWJhLFlhcixOLE4sWSxODQpBbmRyZXcsSHVsbCxOLE4sWSxODQpDaHJpcyxLb2xpb3MsTixOLFksTg0KTmljayxEaWxvcmV0byxOLE4sWSxODQpWYW5pYSxMb3phbm8sTixOLFksTg0KU2hydXRpLFNoYWgsWSxZLFksTg0KRGV2YW5zaCxTaGFoLFksWSxZLE4NCkFrc2hhcixTaGFoLE4sTixZLE4NCkNlbHluLCxOLE4sTixODQpDb2x0b24sV29vZCxZLFksWSxODQpKZXNzaWNhLFJhbW9zLE4sWSxZLE4NCkphY29iLFZhbkhlbGRlcixZLFksWSxODQrDiHZlLER1Ym9pcyxZLFksWSxODQpFbW1ldHQsTmVoZWxpLFksWSxZLE4NCkV2YW4sQW5kcmV3cyxZLFksWSxODQpCYXJiYXJhLEhlbGQsTixOLE4sTg0KU3RlcGhlbixIZWxkLE4sTixOLE4NCkRhbmllbCxIZWxkLE4sWSxOLE4NCkFyaWVsbGUsQmVyZ2VyLE4sWSxOLE4NCkthcmVuLEhlbGQsTixOLE4sTg0KUGV0ZXIsV2VpbnN0ZWluLE4sTixOLE4NClN1ZSxNYXJrcyxOLE4sTixODQpHcmVnLE1hcmtzLE4sTixOLE4NCkhvd2FyZCxXaXNlbWFuLE4sTixOLE4NClRlcmV6YSxCYXJ0YSxOLFksWSxODQpKdWxpYW4sTGVpemVyb3ZpY2ksTixZLFksTg0KVHJpbmEsTWNRdWVlbixOLFksWSxODQpUcmluYSdzLEd1ZXN0LE4sTixOLE4NCkZhYmlvLEJhc3NvIE1vbnRhbmFyaSxOLE4sWSxODQpEaWFuYSxHb2x0cyxOLE4sWSxODQpBbmlydWRoLE5hdGhhbixOLFksTixODQpTaHJhdmFudGhpLE5hdGhhbixOLFksTixODQpIZW1hLEt1bWFyZXNhbixOLFksTixODQpLdW1hcmVzaCxLdW1hcmVzYW4sTixZLE4sTg0KTXVzdGFwaGEsV2FoYWIsWSxZLFksTg0KTmFuZGEsS2lzaG9yZSxOLE4sTixODQpOYW5kaW5pLEtpc2hvcmUsTixOLE4sTg0KR2F1cmksUGF0ZWwsTixOLE4sTg0KUHJhdmluLFBhdGVsLE4sTixOLE4NCkdlZXRhbmphbGksTmFpayxOLE4sTixODQpTYW1pcixOYWlrLE4sTixOLE4NCk5lZW5hLFNoZXR0eSxOLE4sTixODQpCYWxhLFNoZXR0eSxOLE4sTixODQpQYXJ2YXRpLFNlc2hhZHJpLE4sTixOLE4NClNyaSxTZXNoYWRyaSxOLE4sTixODQpHaWxsaWFuLEl2ZXksWSxOLFksTg0KS2V2aW4sS2ltLFksTixZLE4NCk1hcmFsLE1hZmksWSxOLFksTg0KTWF5YSxNYWxsYXIsTixOLE4sTg0KTWF5YSdzLEd1ZXN0LE4sTixOLE4NCkRpdnlhLEtpbmksTixOLE4sTg0KQWJoaWppdCxLaW5pLE4sTixOLE4NCkRpdnlhJ3MsR3Vlc3QsTixOLE4sTg0KRGl2eWEncyxHdWVzdCxOLE4sTixODQpBc2h3aW5pIEthbWF0aCxCaGF0LE4sWSxOLE4NCkFydW4sQmhhdCxOLE4sTixODQpBbmtpdGEsQmhhdCxOLE4sTixODQpTaGFyYW4sS2FyYW50aCxOLFksTixODQpBa3NoYXRhLEthcmFudGgsTixOLE4sTg0KVGFyYSxLYXJhbnRoLE4sTixOLE4NClJhbSBNb2hhbixLaW5pLE4sWSxOLE4NCkt1bXVkYSxLaW5pLE4sTixOLE4NCkRoYXJtYmFwYSxOYXlhayxOLE4sTixODQpDaGl0cmEsTmF5YWssTixOLE4sTg0KQWpveSxQcmFiaHUsTixOLE4sTg0KSmVubnksUHJhYmh1LE4sTixOLE4NCkhvbixMZW9uZyxOLFksWSxODQpFdmEsU28tTGVvbmcsTixZLFksTg0KRGFuLFR6b3R6aXMsTixOLFksTg0KTWVsaXNzYSxUem90emlzLE4sTixZLE4NCkdhaWwsS2F0eixOLE4sTixODQpMZWUsS2F0eixOLE4sTixODQpMaXphLEd1ZXZhcnJhLE4sWSxZLFkNClRvbnksR3VldmFycmEsTixZLFksWQ0KSm95LE1hbmdlbCxOLE4sWSxODQpSb2JieSxTdGVpbixOLE4sWSxODQpTaGF5bmEsWmVsY2VyLE4sTixOLE4NCk9yZW4sLE4sTixOLE4NCklkYW4sU2hhbGV2LE4sTixOLE4NClN1bml0YSxSYW8sTixZLFksTg0KU2FpLFJhbyxOLFksWSxODQpSYWplbmRyYSxLaW5pLFksWSxZLFkNClN1c2htYSxLaW5pLFksWSxZLFkNCkp5b3RpLFNoZW5veSxOLE4sTixODQpTdXJlc2gsU2hlbm95LE4sTixOLE4NCk5lZXBhLENoYWtyYWJvcnRpLFksWSxOLE4NCkphc3ByZWV0LEJhbmdhLFksWSxZLE4NClNoYW5rYXIsRGFzZ3VwdGEsWSxOLE4sTg0KU3V6YW5uZSxEYXNndXB0YSxZLE4sTixODQpHZWV0YW5qYWxpLERhc2d1cHRhLFksTixOLE4NCk5pcmFuamFuLEthbWF0aCxOLE4sTixODQpHZWV0YSxLYW1hdGgsTixOLE4sTg0KVmVlbmEsTmF5YWssTixOLE4sTg0KUmFnaHUsTmF5YWssTixOLE4sTg0KU2hhc2hpa2FudCxOYXlhayxZLE4sTixODQpEZWVwYSxOYXlhayxZLE4sTixODQpTcmlrYW50LE5heWFrLFksTixOLE4NClN1amF0YSxOYXlhayxZLE4sTixODQpBbmVlc2gsU2hpbmd3ZWthcixZLFksTixODQpLc2hpdGksU2hpbmd3ZWthcixZLFksTixODQpBbGksV2FuZyxOLFksWSxODQpNYW5kaXAsU2luZ2gsTixZLE4sTg0KQW1hbixEaGFuZHdhcixOLFksTixODQo="
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
            <p class="event-description">Parking: One King West offers on-site valet parking. Alternatively, parking is also available next door at <a href='https://maps.app.goo.gl/8rT1C5mhA3xpX7qw5'>Commerce Court</a> & <a href='https://maps.app.goo.gl/JVxfERRFeS75FYsj7'>Brookfield Place</a>. </p>
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
            <p class="event-description">Parking: One King West offers on-site valet parking. Alternatively, parking is also available next door at <a href='https://maps.app.goo.gl/8rT1C5mhA3xpX7qw5'>Commerce Court</a> & <a href='https://maps.app.goo.gl/JVxfERRFeS75FYsj7'>Brookfield Place</a>. </p>
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
        time: "10:00 AM - 1:00 PM",
        location: "Austin Gallery, <a href='https://maps.app.goo.gl/kNZM5V1Lz27JREebA'>One King West Hotel</a> ",
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