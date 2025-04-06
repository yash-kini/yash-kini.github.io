const obfCsvData = "Rmlyc3QgTmFtZSxMYXN0IE5hbWUsTWVobmRpLEhpbmR1Q2VyZW1vbnksSmV3aXNoQ2VyZW1vbnksQnJ1bmNoDQpFbWlseSxQYXN0ZXJuYWssWSxZLFksWQ0KRmF0ZW1haCxUYWxlYmksWSxZLFksWQ0KQnJlbixTbGF0ZXIsWSxZLFksWQ0KQW5nZWwsV2lsbGlhbXMsWSxZLFksWQ0KU2FyYWgsQnJ5bWVyLFksWSxZLFkNCkRhaGxpYSxMZXZ5LFksWSxZLFkNCkpQLCxZLFksWSxZDQpOaWNrLFdpbnNvcixZLFksWSxODQpOaWNraWUsLFksWSxZLE4NCkNhcHRhaW4sQW5raXQgQ2hhdWhhbixZLFksWSxODQpTd2F0aSxDaGF1aGFuLFksWSxZLE4NCk1pcmksVGVpY2gsWSxZLFksTg0KVG9tbWFzbyxDYWNpb2xsaSxZLFksWSxODQpZaWZhbixXYW5nLFksWSxZLE4NCllvdW5lcyxQYXJ2aW4sWSxZLFksTg0KWW91bmVzJ3MsR3Vlc3QsWSxZLFksTg0KVGVqYXN2aSxSYWogU2FnYXIsWSxZLFksTg0KS3VkcmF0LEthaGxvbixZLFksWSxODQpQcmFhdGlrYSxNZWhyYSxZLFksWSxODQpTaWRkaGFydGgsRGF2ZSxZLFksWSxODQpEYXZpZCxKZXNpbixOLFksWSxODQpBbmRyw6lhLE1vcnJpcyxOLFksWSxODQpKb2UsTW9ycmlzLE4sWSxZLE4NCkFuZHJlYSxIaXJzY2hlaW1lcixZLFksWSxZDQpTdGVwaGVuLFBhc3Rlcm5hayxZLFksWSxZDQpNZWxpc3NhLFBhc3Rlcm5hayxZLFksWSxZDQpNZWxpc3NhJ3MsR3Vlc3QsWSxZLFksWQ0KQWxhbmEsUGFzdGVybmFrLFksWSxZLFkNCkFsYW5hJ3MsZ3Vlc3QgKEtpcmFuKSxZLFksWSxZDQpBbmRyZXcsUGFzdGVybmFrLFksWSxZLFkNCk1heGluZSxLYXR6LFksWSxZLFkNCkRhdmlkLFBhc3Rlcm5hayxZLFksWSxZDQpBbGFuLFBhc3RlcixZLFksWSxZDQpMb2lzLEJlaW5zdG9jayxZLFksWSxZDQpQaHlsbGlzLFBhc3RlcixZLFksWSxZDQpTdXphbm5lLE1vcmFuLFksWSxZLFkNClRvbnksQmVyYXJkaSxZLFksWSxZDQpJc2FiZWwsTW9yYW4sWSxZLFksWQ0KQnJhZCxDcm9uayxZLFksWSxZDQpCb2IsU3V0ZXIsWSxZLFksWQ0KVmFsLFN1dGVyLFksWSxZLFkNClN1c2FuLE1lcmlhbm8sWSxZLFksWQ0KS2VuLE1lcmlhbm8sWSxZLFksWQ0KQWlsZW5lLFdpdHRzdGVpbixZLFksWSxZDQpTdGVwaGVuLEZlcmd1c29uLE4sWSxZLFkNCkNhdGhlcmluZSxGZXJndXNvbixOLFksWSxZDQpXZW5keSxQZXRlcnMsWSxZLFksTg0KR29yZGllLFBldGVycyxZLFksWSxODQpLYXJlbixIYWxwZXJuLFksWSxZLE4NClJhbixNaWRyb25pLFksWSxZLE4NClRhbGlhLFdvbGZlLFksWSxZLE4NCk5vYSxXb2xmZSxZLFksWSxODQpBbGFuLEtvc2JlcmcsWSxZLFksWQ0KRG9ubmEsU3VsbGl2YW4sWSxZLFksWQ0KUm9iZXJ0LEhpcnNjaGVpbWVyLFksWSxZLFkNCk1hcmxhLEZveCxZLFksWSxZDQpKdXN0aW4sSGlyc2NoZWltZXIsWSxZLFksWQ0KSmVubmlmZXIsSGlyc2NoZWltZXIsWSxZLFksWQ0KTGluZHNheSxIaXJzY2hlaW1lcixZLFksWSxZDQpSaXRhLEhpcnNjaGVpbWVyLFksWSxZLFkNCk1hdXJpZSxCZXJnbWFuLFksWSxZLFkNClRyYWNpZSxWYW4gS2Vzc2VsLE4sWSxZLFkNCk1hcnR5LFZhbiBLZXNzZWwsTixZLFksWQ0KU2VhbixDcmVhZ2FuLE4sWSxZLFkNClRhbWFyYSxDcmVhZ2FuLE4sWSxZLFkNClBlbm55LE1hY0RvbmFsZCxOLFksWSxZDQpIb29tYW4sR2FuamF2aSxOLFksWSxZDQpTaGF3bixXaGl0ZWhlYWQsTixZLFksWQ0KRWxpc3NhLEh1bmtpbmcsTixZLFksWQ0KUm9iLEJhcnRoYSxOLFksWSxZDQpDaGFybGVuZSxCYXJ0aGEsTixZLFksWQ0KRWxhbm5hLENsYXJrLE4sWSxZLFkNCk1pY2hhZWwsQ2xhcmssTixZLFksWQ0KTGl6LEZpbmdlcixOLFksWSxZDQpEZXJlayxNaXRjaGVsbCxOLFksWSxZDQpWYWxzYSxUaG9tYXMsWSxZLFksWQ0KR2VvcmdlLFRob21hcyxZLFksWSxZDQpBbGV4YW5kcmUsTWFsdHNldixZLFksWSxZDQpUZXJyeSxXcmlnaHQsWSxZLFksWQ0KRGViLExldnksWSxZLFksWQ0KQ2FybWksTGV2eSxZLFksWSxZDQpOb2FoLExldnksWSxZLFksWQ0KS2F0aWUsRmxhbm5lcnksWSxZLFksWQ0KRGViYmllLExheGVyLFksWSxZLFkNCkZhYmlhbixHb3JvZHppbnNreSxZLFksWSxZDQpKYW5pY2UsR29yb2R6aW5za3ksWSxZLFksWQ0KUmVuYSxTaGVza2luLFksWSxZLFkNCkdyYW50LFN0aXJsaW5nLFksWSxZLFkNCkVyaWNhLFJlc2hlZixZLFksWSxZDQpIdWdvLFJlc2hlZixZLFksWSxZDQpSYWNoZWxsZSxGcnlkbWFuLE4sWSxZLFkNCldpbGxpYW0sRnJ5ZG1hbixOLFksWSxZDQpFbHlzZSxGcnlkbWFuLE4sWSxZLFkNCkphcmVkLEdhZmZlLE4sWSxZLFkNClN0ZXZlbixEYWluLE4sWSxZLFkNClN0ZXBoYW5pZSxMb29tZXIsTixZLFksWQ0KQ2Fyb2wsTWFyY3VzLFksWSxZLFkNClRlcnJ5LE1hcmN1cyxZLFksWSxZDQpOb2FoLE1hcmN1cyxZLFksWSxZDQpDaGVyeWwsTWl0Y2hlbGwsWSxZLFksWQ0KQXNoZXIsTWFyY3VzLFksWSxZLFkNCkR1ZmZ5LE/igJlDcmF2ZW4sWSxZLFksWQ0KTmFuY3ksR29sZGJlcmcsWSxZLFksWQ0KU2FuZHJhLEdyb3NzLFksWSxZLFkNCkx1aXosR3Jvc3MsWSxZLFksWQ0KU3V6eSxHcm9zcyxZLFksWSxZDQpOaWNvbGUsR3Jvc3MsWSxZLFksWQ0KR3VzdGF2byxHcm9zcyxZLFksWSxZDQpHaWRlb24sR29sYW4sWSxZLFksWQ0KWWFlbCxHb2xhbixZLFksWSxZDQpNYXlhLEdvbGFuLFksWSxZLFkNCkFkaSxHb2xhbixZLFksWSxZDQpJdGFpLEdvbGFuLFksWSxZLFkNCkJlbmppLEdvbGFuLFksWSxZLFkNClZlcmVkLEdvbGFuLFksWSxZLFkNCk9yLEdvbGFuLFksWSxZLFkNCkxpLEdvbGFuLFksWSxZLFkNCkJhcixHb2xhbixZLFksWSxZDQpMaW1vcixTaHVrZXIsWSxZLFksWQ0KU2hhaSxTaGFsZXYsWSxZLE4sWQ0KQW1pdCxTaGFsZXYsWSxZLFksWQ0KRGF2ZSxPbHNlbixZLE4sWSxODQpTaGVsbGV5LE9sc2VuLFksTixZLE4NCllhc2gsS2luaSxZLFksWSxZDQpWaXZlayxOYXlhayxZLFksWSxODQpBbml0YSxOYXlhayxZLFksWSxODQpQcmFtb2QsQmhhdCxZLE4sWSxODQpQcmF2YWRhLEJoYXQsWSxOLFksTg0KUHJhdGhhLEJoYXQsWSxOLFksTg0KQWpheSxSYW8sWSxZLFksTg0KQ2hpdHJhLFJhbyxZLFksWSxODQpBbmp1LFBhaSxZLE4sWSxODQpQcmF2ZWVuLFBhaSxZLE4sWSxODQpQb29uYW0sR3VwdGEsTixZLE4sTg0KUHJhdmVlbixHdXB0YSxOLFksTixODQpCZWVuYSxQYXJla2gsTixZLE4sTg0KSGFyc2hhZCxQYXJla2gsTixZLE4sTg0KQmVlbmEsUGFyZWtoLE4sWSxOLE4NCkFudWosTWFkYW4sTixOLFksTg0KQW51aidzLEd1ZXN0LE4sTixZLE4NClZpamF5LEt1bWFyLFksWSxZLE4NCkFuaW5kaXRhLEt1bWFyLFksWSxZLE4NCixNcnMuIE1haGFudGksWSxZLFksTg0KQWRpdGksTmFpZHUsWSxZLFksTg0KQWJoYXksS3VtYXIsWSxZLFksTg0KWWFuYSxLdW1hcixZLFksWSxODQpLcmlzaCxOYWlkdSxZLFksWSxODQpWYXNhbnRoaSxOYWlkdSxZLFksWSxODQpNYW5nZXNoLE1hdmluS3VydmUsWSxZLFksTg0KTWVnaG5hLE1hdmluS3VydmUsWSxZLFksTg0KR3VydWR1dHQsTWF2aW5LdXJ2ZSxOLFksTixODQpTYWRoYW5hLE1hdmluS3VydmUsTixZLE4sTg0KTmlyYWosVGhhbWJpbmF5YWdhbSxZLFksWSxODQpNYWl0aGlsaSxUaGFtYmluYXlhZ2FtLFksWSxZLE4NClByYWRlZXAsTmFpcixOLE4sWSxODQpOaW5hLE5haXIsTixOLFksTg0KTWFub2osU3JpdmFzdGF2YSxOLE4sWSxODQpNb25hLFNyaXZhc3RhdmEsTixOLFksTg0KU3VkaGlyLFB1bmphYmksTixOLFksTg0KTmVlcmphLFB1bmphYmksTixOLFksTg0KQ2hpbnRhbixKYWluLE4sTixZLE4NCk1vbmljYSxKYWluLE4sTixZLE4NCkJoYXNrYXIsQ2hvd2RodXJ5LFksWSxZLE4NCk5pbGEsQ2hvd2RodXJ5LFksWSxZLE4NCk11cmFsaSxJeWVyLE4sWSxOLE4NCkdlZXRhLEl5ZXIsTixZLE4sTg0KQ2hpbm9vLEJhbGlnYSxZLFksWSxZDQpSdXBhLEJhbGlnYSxZLFksWSxZDQpLYXVzaGlrLEJhbGlnYSxZLFksWSxZDQpUYXBvc2hpLFBhaSxOLFksTixODQpVcGVuZHJhLFBhaSxOLFksTixODQpTdXZhcm5hLE1hbmtpa2FyLE4sWSxOLE4NClNhZGFuYW5hbmQsTWFua2lrYXIsTixZLE4sTg0KTWFub2osUGFpLFksWSxZLE4NClNhdml0YSxQYWksWSxZLFksTg0KQWtzaGF0LFBhaSxZLFksWSxODQpBZHZhaXRoLFBhaSxZLFksWSxODQpBa3NoYXQncyxQYXJ0bmVyLFksWSxZLE4NCkFkdmFpdGgncyxQYXJ0bmVyLFksWSxZLE4NClNhY2hpbixTaGVub3ksWSxZLFksTg0KQWtzaGF0YSxTaGVub3ksWSxZLFksTg0KU2FudG9zaCxLaW5pLFksWSxZLFkNCkVscyxLaW5pLFksWSxZLFkNCk5pbWF5LEtpbmksWSxZLFksWQ0KTmlsYXlhLEtpbmksWSxZLFksWQ0KRGluZXNoLFBhaSxZLFksWSxZDQpBbml0YSxQYWksWSxZLFksWQ0KQWRpdHlhLFBhaSxZLFksWSxZDQpTYXJhaCxPbHNlbixZLFksWSxZDQpLYXJ0aGlrLEtpbmksWSxZLFksWQ0KUmFnaHV2ZWVyLE5heWFrLFksWSxZLFkNCkFuaXRhLE5heWFrLFksWSxZLFkNCk5hbmRpbmksTmF5YWssWSxZLFksWQ0KU2lkLE5heWFrLFksWSxZLFkNClByYWthc2gsTmF5YWssWSxZLFksWQ0KU2Fuam95LFByYWJodSxZLFksWSxZDQpTYW5kaHlhLFByYWJodSxZLFksWSxZDQpBcnVuLFByYWJodSxZLFksWSxZDQpNYWRoYXYsS2luaSxZLFksWSxZDQpTYW5qYW0sS2luaSxZLFksWSxZDQpBbmksS2luaSxZLFksWSxZDQpUYW5pc2hrYSxLaW5pLFksWSxZLFkNClZhc2FudCxCYWxpZ2EsWSxZLFksWQ0KTW9uaWNhLEJhbGlnYSxZLFksWSxZDQpHYXlhdHJpLEtpbmksWSxZLFksWQ0KU2FuanUsS2luaSxZLFksWSxZDQpSb2hhbixLaW5pLFksWSxZLFkNClJpbmt1LEtpbmksWSxZLFksWQ0KUmFodWwsS2luaSxZLFksWSxZDQpSaW5rdSdzLEd1ZXN0LFksWSxZLFkNCkxlZW5hLERlb2RoYXJlLFksTixZLE4NClNhbmplZXYsRGVvZGhhcmUsWSxOLFksTg0KQW5qdWxpLERlb2RoYXJlLFksTixZLE4NCk5hbWl0YSxEZW9kaGFyZSxZLE4sWSxODQpOaXRpbixTYXdhbnQsWSxZLFksTg0KSmFzbWluZSxTYXdhbnQsWSxZLFksTg0KU2lkZGhhbnQsU2F3YW50LFksTixZLE4NCkVsbHksU2F3YW50LFksTixZLE4NClZpamF5LFNoaXJvZGthcixOLFksTixODQpBcGFybmEsU2hpcm9ka2FyLE4sWSxOLE4NCk1lZGhhLERhdGUsWSxZLFksTg0KUHJha2FzaCxEYXRlLFksWSxZLE4NCk1vbmlzaGEsRGF0ZSxZLFksWSxODQpSYXZpLEthcmd1dGthcixZLFksWSxODQpNZWVyYXRhaSxLYXJndXRrYXIsWSxZLFksTg0KUmFuaSxOZW5lLE4sTixZLE4NCk1pbGluZCxOZW5lLE4sTixZLE4NCktydXRpa2EsTmVuZSxOLE4sWSxODQpTd2F0aSxWYWlkeWEsWSxZLFksTg0KQWJoYXksVmFpZHlhLFksWSxZLE4NClN1amVldCxLaW5pLFksWSxZLFkNClZhbml0YSxLaW5pLFksWSxZLFkNClR3aXNoYSxLaW5pLFksWSxZLFkNCkFtYXIsLFksWSxZLFkNCkthdGhlcmluZSxQYWNpcyxOLFksTixODQpLYXRoZXJpbmUncyxQYXJ0bmVyLE4sWSxOLE4NClNoYWxpbmksU2hldGgsWSxOLFksTg0KU3VuaWwsU2hldGgsWSxOLFksTg0KQmVubmV0dCxSb3VsZWF1LFksWSxZLFkNCklzYWJlbGxhLEdyZWNvLFksWSxZLFkNClRob21hcyxTeWVyLFksWSxZLFkNCk1pY2hhZWwsTGV3aXMsWSxZLFksTg0KS3lsZSxDb25zdGFudGluLFksWSxZLE4NClJvYmVydCxMYXppZXIsWSxZLFksTg0KS2ltLExhbmdhdCxZLFksWSxODQpBaWRhbixCbGFja21vcmUsWSxZLFksTg0KQW1hbmRhLCxZLFksWSxODQpBZHJpYW4sRmlsaWNlLFksWSxZLE4NClRlcnJpLEpvbmVzLFksWSxZLE4NCk1vbGx5LFJlZXZlcyxZLFksWSxODQpBbGVqYW5kcmEsTWV6YSxZLFksWSxODQpSeWFuLEJlbm5ldHQsWSxZLFksTg0KTWFyayxIYXJwZXIsWSxZLFksTg0KVGFtYXJhLCxZLFksWSxODQpMdWthcyxTYW50aW5nLFksWSxZLE4NClNvcGhpZSwsWSxZLFksTg0KU2FiYSxZYXIsTixOLFksTg0KQW5kcmV3LEh1bGwsTixOLFksTg0KQ2hyaXMsS29saW9zLE4sTixZLE4NCk5pY2ssRGlsb3JldG8sTixOLFksTg0KVmFuaWEsLE4sTixZLE4NClNocnV0aSxTaGFoLFksWSxZLE4NCkRldmFuc2gsU2hhaCxZLFksWSxODQpBa3NoYXIsU2hhaCxZLFksWSxODQpDZWx5biwsWSxZLFksTg0KQ29sdG9uLFdvb2QsWSxZLFksTg0KSmVzc2ljYSxSYW1vcyxZLFksWSxODQpKYWNvYixWYW5IZWxkZXIsWSxZLFksTg0KRXZlLCxZLFksWSxODQpFbW1ldHQsTmVoZWxpLFksWSxZLE4NCkV2YW4sQW5kcmV3cyxZLFksWSxODQpCYXJiYXJhLEhlbGQsTixZLFksTg0KU3RlcGhlbixIZWxkLE4sWSxZLE4NCkRhbmllbCxIZWxkLE4sWSxZLE4NCkFyaWVsbGUsQmVyZ2VyLE4sWSxZLE4NCkthcmVuLEhlbGQsTixZLFksTg0KUGV0ZXIsV2VpbnN0ZWluLE4sWSxZLE4NClN1ZSxNYXJrcyxOLFksWSxZDQpHcmVnLE1hcmtzLE4sWSxZLFkNCkhvd2FyZCxXaXNlbWFuLE4sWSxZLE4NClRlcmV6YSxCYXJ0YSxOLFksWSxODQpUcmluYSxNY1F1ZWVuLE4sWSxZLE4NClRyaW5hJ3MsR3Vlc3QsTixZLFksTg0KRmFiaW8sQmFzc28gTW9udGFuYXJpLE4sWSxZLE4NCkRpYW5hLEdvbHRzLE4sWSxZLE4NClZpZHlhLEl5ZXIsTixZLE4sTg0KTmF0aGFuLEl5ZXIsTixZLE4sTg0KSGVtYSxLdW1hcmVzYW4sTixZLFksTg0KS3VtYXJlc2gsS3VtYXJlc2FuLE4sWSxZLE4NCk11c3RhcGhhLFdhaGFiLFksWSxZLE4NCk5hbmRhLEtpc2hvcmUsWSxZLFksWQ0KTmFuZGluaSxLaXNob3JlLFksWSxZLFkNCkdhdXJpLFBhdGVsLFksWSxZLE4NClByYXZpbixQYXRlbCxZLFksWSxODQpHZWV0YW5qYWxpLE5haWssWSxZLFksTg0KU2FtaXIsTmFpayxZLFksWSxODQpOZWVuYSxTaGV0dHksWSxZLFksTg0KQmFsYSxTaGV0dHksWSxZLFksTg0KUGFydmF0aSxTZXNoYWRyaSxZLFksWSxODQpTcmksU2VzaGFkcmksWSxZLFksTg0KR2lsbGlhbixJdmV5LFksTixZLE4NCk1hcmFsLE1hZmksWSxOLFksTg0KTWF5YSxNYWxsYXIsWSxZLFksWQ0KTWF5YSdzLEd1ZXN0LFksWSxZLFkNCkRpdnlhLEtpbmksWSxZLFksWQ0KQWJoaWppdCxLaW5pLFksWSxZLFkNCkRpdnlhJ3MsR3Vlc3QsWSxZLFksWQ0KRGl2eWEncyxHdWVzdCxZLFksWSxZDQpBc2h3aW5pIEthbWF0aCxCaGF0LE4sWSxOLE4NCkFydW4sQmhhdCxOLFksTixODQpBbmtpdGEsQmhhdCxOLFksTixODQpTaGFyYW4sS2FyYW50aCxOLFksTixODQpBa3NoYXRhLEthcmFudGgsTixZLE4sTg0KVGFyYSxLYXJhbnRoLE4sWSxOLE4NClJhbSBNb2hhbixLaW5pLE4sWSxOLE4NCkt1bXVkYSxLaW5pLE4sWSxOLE4NCkRoYXJtYmFwYSxOYXlhayxZLFksWSxZDQpDaGl0cmEsTmF5YWssWSxZLFksWQ0KQWpveSxQcmFiaHUsWSxZLFksWQ0KSmVubnksUHJhYmh1LFksWSxZLFkNCkhvbixMZW9uZyxOLFksWSxODQpFdmEsU28tTGVvbmcsTixZLFksTg0KRGFuLFR6b3R6aXMsTixZLFksTg0KTWVsaXNzYSxUem90emlzLE4sWSxZLE4NCkdhaWwsS2F0eixZLFksWSxZDQpMZWUsS2F0eixZLFksWSxZDQpMaXphLEd1ZXZhcnJhLE4sWSxZLFkNClRvbnksR3VldmFycmEsTixZLFksWQ0KSm95LE1hbmdlbCxOLFksWSxZDQpSb2JieSxTdGVpbixOLFksWSxZDQpTaGF5bmEsWmVsY2VyLE4sWSxZLFkNCk9yZW4sLE4sWSxZLFkNCklkYW4sU2hhbGV2LFksWSxZLFkNClN1bml0YSxSYW8sTixZLFksTg0KU2FpLFJhbyxOLFksWSxODQpSYWplbmRyYSxLaW5pLFksWSxZLFkNClN1c2htYSxLaW5pLFksWSxZLFkNCkp5b3RpLFNoZW5veSxZLFksWSxZDQpTdXJlc2gsU2hlbm95LFksWSxZLFkNCk5lZXBhLENoYWtyYWJvcnRpLFksWSxZLE4NCkphc3ByZWV0LEJhbmdhLFksWSxZLE4NCg=="
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