const obfCsvData = "Rmlyc3QgTmFtZSxMYXN0IE5hbWUsTWVobmRpLEhpbmR1Q2VyZW1vbnksSmV3aXNoQ2VyZW1vbnksQnJ1bmNoDQpTYXJhaCxCcnltZXIsWSxZLFksWQ0KRW1pbHksUGFzdGVybmFrLFksWSxZLFkNCkJyZW4sU2xhdGVyLFksWSxZLFkNCkFuZ2VsLFdpbGxpYW1zLFksWSxZLFkNCkZhdGVtYWgsVGFsZWJpLFksWSxZLFkNCkRhaGxpYSxMZXZ5LFksWSxZLFkNCkpQLCxZLFksWSxZDQpNaXJpLFRlaWNoLFksWSxZLE4NClRvbW1hc28sQ2FjaW9sbGksWSxZLFksTg0KTmljayxXaW5zb3IsWSxZLFksTg0KTmlja2llLCxZLFksWSxODQpUZWphc3ZpLFJhaiBTYWdhcixZLFksWSxODQpZb3VuZXMsUGFydmluLFksWSxZLE4NCllvdW5lcydzLEd1ZXN0LFksWSxZLE4NClByYWF0aWthLE1laHJhLFksWSxZLE4NClNpZGRoYXJ0aCxEYXZlLFksWSxZLE4NCkNhcHRhaW4sQW5raXQgQ2hhdWhhbixZLFksWSxODQpTd2F0aSxDaGF1aGFuLFksWSxZLE4NCllpZmFuLFdhbmcsWSxZLFksTg0KS3VkcmF0LEthaGxvbixZLFksWSxODQpEYXZpZCxKZXNpbixOLFksWSxODQpBbmRyw6lhLE1vcnJpcyxOLFksWSxODQpKb2UsTW9ycmlzLE4sWSxZLE4NClN0ZXBoZW4sUGFzdGVybmFrLFksWSxZLFkNCkRhdmlkLFBhc3Rlcm5hayxZLFksWSxZDQpBbmRyZWEsSGlyc2NoZWltZXIsWSxZLFksWQ0KQWxhbmEsUGFzdGVybmFrLFksWSxZLFkNCkFsYW5hJ3MsZ3Vlc3QgKEtpcmFuKSxZLFksWSxZDQpNYXhpbmUsS2F0eixZLFksWSxZDQpNZWxpc3NhLFBhc3Rlcm5hayxZLFksWSxZDQpNZWxpc3NhJ3MsR3Vlc3QsWSxZLFksWQ0KQW5kcmV3LFBhc3Rlcm5hayxZLFksWSxZDQpBbGFuLFBhc3RlcixZLFksWSxZDQpMb2lzLEJlaW5zdG9jayxZLFksWSxZDQpQaHlsbGlzLFBhc3RlcixZLFksWSxZDQpTdXphbm5lLE1vcmFuLFksWSxZLFkNClRvbnksQmVyYXJkaSxZLFksWSxZDQpBaWxlbmUsV2l0dHN0ZWluLFksWSxZLFkNCkJvYixTdXRlcixZLFksWSxZDQpWYWwsU3V0ZXIsWSxZLFksWQ0KU3VzYW4sTWVyaWFubyxZLFksWSxZDQpLZW4sTWVyaWFubyxZLFksWSxZDQpJc2FiZWwsTW9yYW4sWSxZLFksWQ0KQnJhZCxDcm9uayxZLFksWSxZDQpTdGVwaGVuLEZlcmd1c29uLE4sWSxZLFkNCkNhdGhlcmluZSxGZXJndXNvbixOLFksWSxZDQpLYXJlbixIYWxwZXJuLFksWSxZLE4NClJhbixNaWRyb25pLFksWSxZLE4NClRhbGlhLFdvbGZlLFksWSxZLE4NCldlbmR5LFBldGVycyxZLFksWSxODQpHb3JkaWUsUGV0ZXJzLFksWSxZLE4NCk5vYSxXb2xmZSxZLFksWSxODQpSaXRhLEhpcnNjaGVpbWVyLFksWSxZLFkNCk1hdXJpZSxCZXJnbWFuLFksWSxZLFkNCkFsYW4sS29zYmVyZyxZLFksWSxZDQpEb25uYSxTdWxsaXZhbixZLFksWSxZDQpSb2JlcnQsSGlyc2NoZWltZXIsWSxZLFksWQ0KTWFybGEsRm94LFksWSxZLFkNCkp1c3RpbixIaXJzY2hlaW1lcixZLFksWSxZDQpKZW5uaWZlcixIaXJzY2hlaW1lcixZLFksWSxZDQpMaW5kc2F5LEhpcnNjaGVpbWVyLFksWSxZLFkNClJvYixCYXJ0aGEsTixZLFksWQ0KQ2hhcmxlbmUsQmFydGhhLE4sWSxZLFkNClNlYW4sQ3JlYWdhbixOLFksWSxZDQpUYW1hcmEsQ3JlYWdhbixOLFksWSxZDQpQZW5ueSxNYWNEb25hbGQsTixZLFksWQ0KSG9vbWFuLEdhbmphdmksTixZLFksWQ0KU2hhd24sV2hpdGVoZWFkLE4sWSxZLFkNCkVsaXNzYSxIdW5raW5nLE4sWSxZLFkNClRyYWNpZSxWYW4gS2Vzc2VsLE4sWSxZLFkNCk1hcnR5LFZhbiBLZXNzZWwsTixZLFksWQ0KTGl6LEZpbmdlcixOLFksWSxZDQpEZXJlayxNaXRjaGVsbCxOLFksWSxZDQpFbGFubmEsQ2xhcmssTixZLFksWQ0KTWljaGFlbCxDbGFyayxOLFksWSxZDQpSYWNoZWxsZSxGcnlkbWFuLE4sWSxZLFkNCldpbGxpYW0sRnJ5ZG1hbixOLFksWSxZDQpFbHlzZSxGcnlkbWFuLE4sWSxZLFkNCkphcmVkLEdhZmZlLE4sWSxZLFkNCkRlYmJpZSxMYXhlcixZLFksWSxZDQpGYWJpYW4sR29yb2R6aW5za3ksWSxZLFksWQ0KSmFuaWNlLEdvcm9kemluc2t5LFksWSxZLFkNCkFsZXhhbmRyZSxNYWx0c2V2LFksWSxZLFkNClRlcnJ5LFdyaWdodCxZLFksWSxZDQpWYWxzYSxUaG9tYXMsWSxZLFksWQ0KR2VvcmdlLFRob21hcyxZLFksWSxZDQpSZW5hLFNoZXNraW4sWSxZLFksWQ0KR3JhbnQsU3RpcmxpbmcsWSxZLFksWQ0KTm9haCxMZXZ5LFksWSxZLFkNCkthdGllLEZsYW5uZXJ5LFksWSxZLFkNClN0ZXZlbixEYWluLE4sWSxZLFkNClN0ZXBoYW5pZSxMb29tZXIsTixZLFksWQ0KU2FuZHJhLEdyb3NzLFksWSxZLFkNCkx1aXosR3Jvc3MsWSxZLFksWQ0KU3V6eSxHcm9zcyxZLFksWSxZDQpOaWNvbGUsR3Jvc3MsWSxZLFksWQ0KR3VzdGF2byxHcm9zcyxZLFksWSxZDQpHaWRlb24sR29sYW4sWSxZLFksWQ0KWWFlbCxHb2xhbixZLFksWSxZDQpNYXlhLEdvbGFuLFksWSxZLFkNCkFkaSxHb2xhbixZLFksWSxZDQpJdGFpLEdvbGFuLFksWSxZLFkNCkNhcm9sLE1hcmN1cyxZLFksWSxZDQpUZXJyeSxNYXJjdXMsWSxZLFksWQ0KRHVmZnksT+KAmUNyYXZlbixZLFksWSxZDQpOYW5jeSxHb2xkYmVyZyxZLFksWSxZDQpBc2hlcixNYXJjdXMsWSxZLFksWQ0KRGViLExldnksWSxZLFksWQ0KQ2FybWksTGV2eSxZLFksWSxZDQpCZW5qaSxHb2xhbixZLFksWSxZDQpWZXJlZCxHb2xhbixZLFksWSxZDQpPcixHb2xhbixZLFksWSxZDQpMaSxHb2xhbixZLFksWSxZDQpCYXIsR29sYW4sWSxZLFksWQ0KTGltb3IsU2h1a2VyLFksWSxZLFkNClNoYWksU2hhbGV2LFksWSxZLFkNCkVyaWNhLFJlc2hlZixZLFksWSxZDQpIdWdvLFJlc2hlZixZLFksWSxZDQpOb2FoLE1hcmN1cyxZLFksWSxZDQpDaGVyeWwsTWl0Y2hlbGwsWSxZLFksWQ0KQW1pdCxTaGFsZXYsWSxZLFksWQ0KRGF2ZSxPbHNlbixZLE4sWSxODQpTaGVsbGV5LE9sc2VuLFksTixZLE4NCllhc2gsS2luaSxZLFksWSxZDQpWaXZlayxOYXlhayxZLFksWSxODQpBbml0YSxOYXlhayxZLFksWSxODQpQcmFtb2QsQmhhdCxZLE4sWSxODQpQcmF2YWRhLEJoYXQsWSxOLFksTg0KUHJhdGhhLEJoYXQsWSxOLFksTg0KQWpheSxSYW8sWSxZLFksTg0KQ2hpdHJhLFJhbyxZLFksWSxODQpBbmp1LFBhaSxZLE4sWSxODQpQcmF2ZWVuLFBhaSxZLE4sWSxODQpQb29uYW0sR3VwdGEsTixZLE4sTg0KUHJhdmVlbixHdXB0YSxOLFksTixODQpCZWVuYSxQYXJla2gsTixZLE4sTg0KSGFyc2hhZCxQYXJla2gsTixZLE4sTg0KQmVlbmEsUGFyZWtoLE4sWSxOLE4NCkFudWosTWFkYW4sTixOLFksTg0KQW51aidzLEd1ZXN0LE4sTixZLE4NClZpamF5LEt1bWFyLFksWSxZLE4NCkFuaW5kaXRhLEt1bWFyLFksWSxZLE4NCixNcnMuIE1haGFudGksWSxZLFksTg0KQWRpdGksTmFpZHUsWSxZLFksTg0KQWJoYXksS3VtYXIsWSxZLFksTg0KWWFuYSxLdW1hcixZLFksWSxODQpLcmlzaCxOYWlkdSxZLFksWSxODQpWYXNhbnRoaSxOYWlkdSxZLFksWSxODQpNYW5nZXNoLE1hdmluS3VydmUsWSxZLFksTg0KTWVnaG5hLE1hdmluS3VydmUsWSxZLFksTg0KR3VydWR1dHQsTWF2aW5LdXJ2ZSxOLFksTixODQpTYWRoYW5hLE1hdmluS3VydmUsTixZLE4sTg0KU3VyYWosTWF2aW5LdXJ2ZSxZLFksWSxODQpNYWl0aGlsaSxNYXZpbkt1cnZlLFksWSxZLE4NClByYWRlZXAsTmFpcixOLE4sWSxODQpOaW5hLE5haXIsTixOLFksTg0KTWFub2osU3JpdmFzdGF2YSxOLE4sWSxODQpNb25hLFNyaXZhc3RhdmEsTixOLFksTg0KU3VkaGlyLFB1bmphYmksTixOLFksTg0KTmVlcmphLFB1bmphYmksTixOLFksTg0KQ2hpbnRhbixKYWluLE4sTixZLE4NCk1vbmljYSxKYWluLE4sTixZLE4NCkJoYXNrYXIsQ2hvd2RodXJ5LFksWSxZLE4NCk5pbGEsQ2hvd2RodXJ5LFksWSxZLE4NCk11cmFsaSxJeWVyLE4sWSxOLE4NCkdlZXRhLEl5ZXIsTixZLE4sTg0KQ2hpbm9vLEJhbGlnYSxZLFksWSxZDQpSdXBhLEJhbGlnYSxZLFksWSxZDQpLYXVzaGlrLEJhbGlnYSxZLFksWSxZDQpUYXBvc2hpLFBhaSxOLFksTixODQpVcGVuZHJhLFBhaSxOLFksTixODQpTdXZhcm5hLE1hbmtpa2FyLE4sWSxOLE4NClNhZGFuYW5hbmQsTWFua2lrYXIsTixZLE4sTg0KTWFub2osUGFpLFksWSxZLE4NClNhdml0YSxQYWksWSxZLFksTg0KQWtzaGF0LFBhaSxZLFksWSxODQpBZHZhaXRoLFBhaSxZLFksWSxODQpBa3NoYXQncyxQYXJ0bmVyLFksWSxZLE4NCkFkdmFpdGgncyxQYXJ0bmVyLFksWSxZLE4NClNhY2hpbixTaGVub3ksWSxZLFksTg0KQWtzaGF0YSxTaGVub3ksWSxZLFksTg0KU2FudG9zaCxLaW5pLFksWSxZLFkNCkVscyxLaW5pLFksWSxZLFkNCk5pbWF5LEtpbmksWSxZLFksWQ0KTmlsYXlhLEtpbmksWSxZLFksWQ0KRGluZXNoLFBhaSxZLFksWSxZDQpBbml0YSxQYWksWSxZLFksWQ0KQWRpdHlhLFBhaSxZLFksWSxZDQpTYXJhaCxPbHNlbixZLFksWSxZDQpLYXJ0aGlrLEtpbmksWSxZLFksWQ0KUmFnaHV2ZWVyLE5heWFrLFksWSxZLFkNCkFuaXRhLE5heWFrLFksWSxZLFkNCk5hbmRpbmksTmF5YWssWSxZLFksWQ0KU2lkLE5heWFrLFksWSxZLFkNClByYWthc2gsTmF5YWssWSxZLFksWQ0KU2Fuam95LFByYWJodSxZLFksWSxZDQpTYW5kaHlhLFByYWJodSxZLFksWSxZDQpBcnVuLFByYWJodSxZLFksWSxZDQpNYWRoYXYsS2luaSxZLFksWSxZDQpTYW5qYW0sS2luaSxZLFksWSxZDQpBbmksS2luaSxZLFksWSxZDQpUYW5pc2hrYSxLaW5pLFksWSxZLFkNClZhc2FudCxCYWxpZ2EsWSxZLFksWQ0KTW9uaWNhLEJhbGlnYSxZLFksWSxZDQpHYXlhdHJpLEtpbmksWSxZLFksWQ0KU2FuanUsS2luaSxZLFksWSxZDQpSb2hhbixLaW5pLFksWSxZLFkNClJpbmt1LEtpbmksWSxZLFksWQ0KUmFodWwsS2luaSxZLFksWSxZDQpSaW5rdSdzLEd1ZXN0LFksWSxZLFkNCkxlZW5hLERlb2RoYXJlLFksTixZLE4NClNhbmplZXYsRGVvZGhhcmUsWSxOLFksTg0KQW5qdWxpLERlb2RoYXJlLFksTixZLE4NCk5hbWl0YSxEZW9kaGFyZSxZLE4sWSxODQpOaXRpbixTYXdhbnQsWSxZLFksTg0KSmFzbWluZSxTYXdhbnQsWSxZLFksTg0KU2lkZGhhbnQsU2F3YW50LFksTixZLE4NCkVsbHksU2F3YW50LFksTixZLE4NClZpamF5LFNoaXJvZGthcixOLFksTixODQpBcGFybmEsU2hpcm9ka2FyLE4sWSxOLE4NCk1lZGhhLERhdGUsWSxZLFksTg0KUHJha2FzaCxEYXRlLFksWSxZLE4NCk1vbmlzaGEsRGF0ZSxZLFksWSxODQpSYXZpLEthcmd1dGthcixZLFksWSxODQpNZWVyYXRhaSxLYXJndXRrYXIsWSxZLFksTg0KUmFuaSxOZW5lLE4sTixZLE4NCk1pbGluZCxOZW5lLE4sTixZLE4NCktydXRpa2EsTmVuZSxOLE4sWSxODQpTd2F0aSxWYWlkeWEsWSxZLFksTg0KQWJoYXksVmFpZHlhLFksWSxZLE4NClN1amVldCxLaW5pLFksWSxZLFkNClZhbml0YSxLaW5pLFksWSxZLFkNClR3aXNoYSxLaW5pLFksWSxZLFkNCkFtYXIsLFksWSxZLFkNCkthdGhlcmluZSxQYWNpcyxOLFksTixODQpLYXRoZXJpbmUncyxQYXJ0bmVyLE4sWSxOLE4NClNoYWxpbmksU2hldGgsWSxOLFksTg0KU3VuaWwsU2hldGgsWSxOLFksTg0KQmVubmV0dCxSb3VsZWF1LFksWSxZLFkNCklzYWJlbGxhLEdyZWNvLFksWSxZLFkNClRob21hcyxTeWVyLFksWSxZLFkNCk1pY2hhZWwsTGV3aXMsWSxZLFksTg0KS3lsZSxDb25zdGFudGluLFksWSxZLE4NClJvYmVydCxMYXppZXIsWSxZLFksTg0KS2ltLExhbmdhdCxZLFksWSxODQpBaWRhbixCbGFja21vcmUsWSxZLFksTg0KQW1hbmRhLCxZLFksWSxODQpBZHJpYW4sRmlsaWNlLFksWSxZLE4NClRlcnJpLEpvbmVzLFksWSxZLE4NCk1vbGx5LFJlZXZlcyxZLFksWSxODQpBbGVqYW5kcmEsTWV6YSxZLFksWSxODQpSeWFuLEJlbm5ldHQsWSxZLFksTg0KTWFyayxIYXJwZXIsWSxZLFksTg0KVGFtYXJhLCxZLFksWSxODQpMdWthcyxTYW50aW5nLFksWSxZLE4NClNvcGhpZSwsWSxZLFksTg0KU2FiYSxZYXIsTixOLFksTg0KQW5kcmV3LEh1bGwsTixOLFksTg0KQ2hyaXMsS29saW9zLE4sTixZLE4NCk5pY2ssRGlsb3JldG8sTixOLFksTg0KVmFuaWEsLE4sTixZLE4NClNocnV0aSxTaGFoLFksWSxZLE4NCkRldmFuc2gsU2hhaCxZLFksWSxODQpBa3NoYXIsU2hhaCxZLFksWSxODQpDZWx5biwsWSxZLFksTg0KQ29sdG9uLFdvb2QsWSxZLFksTg0KSmVzc2ljYSxSYW1vcyxZLFksWSxODQpKYWNvYixWYW5IZWxkZXIsWSxZLFksTg0KRXZlLCxZLFksWSxODQpFbW1ldHQsTmVoZWxpLFksWSxZLE4NCkV2YW4sQW5kcmV3cyxZLFksWSxODQpEYW5pZWwsSGVsZCxOLFksWSxODQpBcmllbGxlLEJlcmdlcixOLFksWSxODQpCYXJiYXJhLEhlbGQsTixZLFksTg0KU3RlcGhlbixIZWxkLE4sWSxZLE4NCkthcmVuLEhlbGQsTixZLFksTg0KUGV0ZXIsV2VpbnN0ZWluLE4sWSxZLE4NClN1ZSxNYXJrcyxOLFksWSxZDQpHcmVnLE1hcmtzLE4sWSxZLFkNClRlcmV6YSxCYXJ0YSxOLFksWSxODQpUcmluYSxNY1F1ZWVuLE4sWSxZLE4NClRyaW5hJ3MsR3Vlc3QsTixZLFksTg0KRmFiaW8sQmFzc28gTW9udGFuYXJpLE4sWSxZLE4NCkRpYW5hLEdvbHRzLE4sWSxZLE4NCkhvd2FyZCxXaXNlbWFuLE4sWSxZLE4NClZpZHlhLEl5ZXIsTixZLE4sTg0KTmF0aGFuLEl5ZXIsTixZLE4sTg0KSGVtYSxLdW1hcmVzYW4sTixZLFksTg0KS3VtYXJlc2gsS3VtYXJlc2FuLE4sWSxZLE4NCk11c3RhcGhhLFdhaGFiLFksWSxZLE4NCk5hbmRhLEtpc2hvcmUsWSxZLFksWQ0KTmFuZGluaSxLaXNob3JlLFksWSxZLFkNCkdhdXJpLFBhdGVsLFksWSxZLE4NClByYXZpbixQYXRlbCxZLFksWSxODQpHZWV0YW5qYWxpLE5haWssWSxZLFksTg0KU2FtaXIsTmFpayxZLFksWSxODQpOZWVuYSxTaGV0dHksWSxZLFksTg0KQmFsYSxTaGV0dHksWSxZLFksTg0KUGFydmF0aSxTZXNoYWRyaSxZLFksWSxODQpTcmksU2VzaGFkcmksWSxZLFksTg0KR2lsbGlhbixJdmV5LFksTixZLE4NCk1hcmFsLE1hZmksWSxOLFksTg0KTWF5YSxNYWxsYXIsWSxZLFksWQ0KTWF5YSdzLEd1ZXN0LFksWSxZLFkNCkRpdnlhLEtpbmksWSxZLFksWQ0KQWJoaWppdCxLaW5pLFksWSxZLFkNCkRpdnlhJ3MsR3Vlc3QsWSxZLFksWQ0KRGl2eWEncyxHdWVzdCxZLFksWSxZDQpBc2h3aW5pIEthbWF0aCxCaGF0LE4sWSxOLE4NCkFydW4sQmhhdCxOLFksTixODQpBbmtpdGEsQmhhdCxOLFksTixODQpTaGFyYW4sS2FyYW50aCxOLFksTixODQpBa3NoYXRhLEthcmFudGgsTixZLE4sTg0KVGFyYSxLYXJhbnRoLE4sWSxOLE4NClJhbSBNb2hhbixLaW5pLE4sWSxOLE4NCkt1bXVkYSxLaW5pLE4sWSxOLE4NCkRoYXJtYmFwYSxOYXlhayxZLFksWSxZDQpDaGl0cmEsTmF5YWssWSxZLFksWQ0KQWpveSxQcmFiaHUsWSxZLFksWQ0KSmVubnksUHJhYmh1LFksWSxZLFkNCkRhbixUem90emlzLE4sWSxZLE4NCk1lbGlzc2EsVHpvdHppcyxOLFksWSxODQpIb24sTGVvbmcsTixZLFksTg0KRXZhLFNvLUxlb25nLE4sWSxZLE4NCkdhaWwsS2F0eixZLFksWSxZDQpMZWUsS2F0eixZLFksWSxZDQpKb3ksTWFuZ2VsLE4sWSxZLFkNClJvYmJ5LFN0ZWluLE4sWSxZLFkNCkxpemEsR3VldmFycmEsTixZLFksWQ0KVG9ueSxHdWV2YXJyYSxOLFksWSxZDQpTaGF5bmEsWmVsY2VyLE4sWSxZLFkNCk9yZW4sLE4sWSxZLFkNCklkYW4sU2hhbGV2LFksWSxZLFkNClN1bml0YSxSYW8sTixZLFksTg0KU2FpLFJhbyxOLFksWSxODQpSYWplbmRyYSxLaW5pLFksWSxZLFkNClN1c2htYSxLaW5pLFksWSxZLFkNCkp5b3RpLFNoZW5veSxZLFksWSxZDQpTdXJlc2gsU2hlbm95LFksWSxZLFkNCg=="
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