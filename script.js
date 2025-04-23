const obfCsvData = "Rmlyc3QgTmFtZSxMYXN0IE5hbWUsTWVobmRpLEhpbmR1Q2VyZW1vbnksSmV3aXNoQ2VyZW1vbnksQnJ1bmNoDQpFbWlseSxQYXN0ZXJuYWssWSxZLFksWQ0KRmF0ZW1haCxUYWxlYmksWSxZLFksWQ0KQnJlbixTbGF0ZXIsWSxZLFksWQ0KQW5nZWwsV2lsbGlhbXMsWSxZLFksWQ0KRGFobGlhLExldnksWSxZLFksWQ0KSlAsLFksWSxZLFkNCk5pY2ssV2luc29yLFksWSxZLE4NCk5pY2tpZSwsWSxZLFksTg0KQ2FwdGFpbixBbmtpdCBDaGF1aGFuLFksWSxZLE4NClN3YXRpLENoYXVoYW4sWSxZLFksTg0KTWlyaSxUZWljaCxZLFksWSxODQpUb21tYXNvLENhY2lvbGxpLFksWSxZLE4NCllpZmFuLFdhbmcsWSxZLFksTg0KWW91bmVzLFBhcnZpbixZLFksWSxODQpZb3VuZXMncyxHdWVzdCxZLFksWSxODQpUZWphc3ZpLFJhaiBTYWdhcixZLFksWSxODQpLdWRyYXQsS2FobG9uLFksWSxZLE4NClByYWF0aWthLE1laHJhLFksWSxZLE4NClNpZGRoYXJ0aCxEYXZlLFksWSxZLE4NCkRhdmlkLEplc2luLE4sWSxZLE4NCkFuZHLDqWEsTW9ycmlzLE4sWSxZLE4NCkpvZSxNb3JyaXMsTixZLFksTg0KQW5kcmVhLEhpcnNjaGVpbWVyLFksWSxZLFkNClN0ZXBoZW4sUGFzdGVybmFrLFksWSxZLFkNCk1lbGlzc2EsUGFzdGVybmFrLFksWSxZLFkNCk1lbGlzc2EncyxHdWVzdCxZLFksWSxZDQpBbGFuYSxQYXN0ZXJuYWssWSxZLFksWQ0KQWxhbmEncyxndWVzdCAoS2lyYW4pLFksWSxZLFkNCkFuZHJldyxQYXN0ZXJuYWssWSxZLFksWQ0KTWF4aW5lLEthdHosWSxZLFksWQ0KRGF2aWQsUGFzdGVybmFrLFksWSxZLFkNCkFsYW4sUGFzdGVyLFksWSxZLFkNCkxvaXMsQmVpbnN0b2NrLFksWSxZLFkNClBoeWxsaXMsUGFzdGVyLFksWSxZLFkNClN1emFubmUsTW9yYW4sWSxZLFksWQ0KVG9ueSxCZXJhcmRpLFksWSxZLFkNCklzYWJlbCxNb3JhbixZLFksWSxZDQpCcmFkLENyb25rLFksWSxZLFkNCkJvYixTdXRlcixZLFksWSxZDQpWYWwsU3V0ZXIsWSxZLFksWQ0KU3VzYW4sTWVyaWFubyxZLFksWSxZDQpLZW4sTWVyaWFubyxZLFksWSxZDQpBaWxlbmUsV2l0dHN0ZWluLFksWSxZLFkNClN0ZXBoZW4sRmVyZ3Vzb24sTixZLFksWQ0KQ2F0aGVyaW5lLEZlcmd1c29uLE4sWSxZLFkNCldlbmR5LFBldGVycyxZLFksWSxODQpHb3JkaWUsUGV0ZXJzLFksWSxZLE4NCkthcmVuLEhhbHBlcm4sWSxZLFksTg0KUmFuLE1pZHJvbmksWSxZLFksTg0KVGFsaWEsV29sZmUsWSxZLFksTg0KTm9hLFdvbGZlLFksWSxZLE4NCkFsYW4sS29zYmVyZyxZLFksWSxZDQpEb25uYSxTdWxsaXZhbixZLFksWSxZDQpSb2JlcnQsSGlyc2NoZWltZXIsWSxZLFksWQ0KTWFybGEsRm94LFksWSxZLFkNCkp1c3RpbixIaXJzY2hlaW1lcixZLFksWSxZDQpKZW5uaWZlcixIaXJzY2hlaW1lcixZLFksWSxZDQpMaW5kc2F5LEhpcnNjaGVpbWVyLFksWSxZLFkNClJpdGEsSGlyc2NoZWltZXIsWSxZLFksWQ0KTWF1cmllLEJlcmdtYW4sWSxZLFksWQ0KVHJhY2llLFZhbiBLZXNzZWwsTixZLFksWQ0KTWFydHksVmFuIEtlc3NlbCxOLFksWSxZDQpTZWFuLENyZWFnYW4sTixZLFksWQ0KVGFtYXJhLENyZWFnYW4sTixZLFksWQ0KUGVubnksTWFjRG9uYWxkLE4sWSxZLFkNCkhvb21hbixHYW5qYXZpLE4sWSxZLFkNClNoYXduLFdoaXRlaGVhZCxOLFksWSxZDQpFbGlzc2EsSHVua2luZyxOLFksWSxZDQpSb2IsQmFydGhhLE4sWSxZLFkNCkNoYXJsZW5lLEJhcnRoYSxOLFksWSxZDQpFbGFubmEsQ2xhcmssTixZLFksWQ0KTWljaGFlbCxDbGFyayxOLFksWSxZDQpMaXosRmluZ2VyLE4sWSxZLFkNCkRlcmVrLE1pdGNoZWxsLE4sWSxZLFkNClZhbHNhLFRob21hcyxZLFksWSxZDQpHZW9yZ2UsVGhvbWFzLFksWSxZLFkNCkFsZXhhbmRyZSxNYWx0c2V2LFksWSxZLFkNClRlcnJ5LFdyaWdodCxZLFksWSxZDQpEZWIsTGV2eSxZLFksWSxZDQpDYXJtaSxMZXZ5LFksWSxZLFkNCk5vYWgsTGV2eSxZLFksWSxZDQpLYXRpZSxGbGFubmVyeSxZLFksWSxZDQpEZWJiaWUsTGF4ZXIsWSxZLFksWQ0KRmFiaWFuLEdvcm9kemluc2t5LFksWSxZLFkNCkphbmljZSxHb3JvZHppbnNreSxZLFksWSxZDQpSZW5hLFNoZXNraW4sWSxZLFksWQ0KR3JhbnQsU3RpcmxpbmcsWSxZLFksWQ0KRXJpY2EsUmVzaGVmLFksWSxZLFkNCkh1Z28sUmVzaGVmLFksWSxZLFkNClJhY2hlbGxlLEZyeWRtYW4sTixZLFksWQ0KV2lsbGlhbSxGcnlkbWFuLE4sWSxZLFkNCkVseXNlLEZyeWRtYW4sTixZLFksWQ0KSmFyZWQsR2FmZmUsTixZLFksWQ0KU3RldmVuLERhaW4sTixZLFksWQ0KU3RlcGhhbmllLExvb21lcixOLFksWSxZDQpDYXJvbCxNYXJjdXMsWSxZLFksWQ0KVGVycnksTWFyY3VzLFksWSxZLFkNCk5vYWgsTWFyY3VzLFksWSxZLFkNCkNoZXJ5bCxNaXRjaGVsbCxZLFksWSxZDQpBc2hlcixNYXJjdXMsWSxZLFksWQ0KRHVmZnksT+KAmUNyYXZlbixZLFksWSxZDQpOYW5jeSxHb2xkYmVyZyxZLFksWSxZDQpTYW5kcmEsR3Jvc3MsWSxZLFksWQ0KTHVpeixHcm9zcyxZLFksWSxZDQpTdXp5LEdyb3NzLFksWSxZLFkNCk5pY29sZSxHcm9zcyxZLFksWSxZDQpHdXN0YXZvLEdyb3NzLFksWSxZLFkNCkdpZGVvbixHb2xhbixZLFksWSxZDQpZYWVsLEdvbGFuLFksWSxZLFkNCk1heWEsR29sYW4sWSxZLFksWQ0KQWRpLEdvbGFuLFksWSxZLFkNCkl0YWksR29sYW4sWSxZLFksWQ0KQmVuamksR29sYW4sWSxZLFksWQ0KVmVyZWQsR29sYW4sWSxZLFksWQ0KT3IsR29sYW4sWSxZLFksWQ0KTGksR29sYW4sWSxZLFksWQ0KQmFyLEdvbGFuLFksWSxZLFkNCkxpbW9yLFNodWtlcixZLFksWSxZDQpTaGFpLFNoYWxldixZLFksWSxZDQpBbWl0LFNoYWxldixZLFksWSxZDQpEYXZlLE9sc2VuLFksTixZLE4NClNoZWxsZXksT2xzZW4sWSxOLFksTg0KWWFzaCxLaW5pLFksWSxZLFkNClZpdmVrLE5heWFrLFksWSxZLE4NCkFuaXRhLE5heWFrLFksWSxZLE4NClByYW1vZCxCaGF0LFksWSxZLE4NClByYXZhZGEsQmhhdCxZLFksWSxODQpQcmF0aGEsQmhhdCxZLFksWSxODQpBamF5LFJhbyxZLFksWSxODQpDaGl0cmEsUmFvLFksWSxZLE4NCkFuanUsUGFpLFksWSxZLE4NClByYXZlZW4sUGFpLFksWSxZLE4NClBvb25hbSxHdXB0YSxOLFksTixODQpQcmF2ZWVuLEd1cHRhLE4sWSxOLE4NCkJlZW5hLFBhcmVraCxOLFksTixODQpIYXJzaGFkLFBhcmVraCxOLFksTixODQpCZWVuYSxQYXJla2gsTixZLE4sTg0KQW51aixNYWRhbixOLE4sWSxODQpBbnVqJ3MsR3Vlc3QsTixOLFksTg0KVmlqYXksS3VtYXIsWSxZLFksTg0KQW5pbmRpdGEsS3VtYXIsWSxZLFksTg0KLE1ycy4gTWFoYW50aSxZLFksWSxODQpBZGl0aSxOYWlkdSxZLFksWSxODQpBYmhheSxLdW1hcixZLFksWSxODQpZYW5hLEt1bWFyLFksWSxZLE4NCktyaXNoLE5haWR1LFksWSxZLE4NClZhc2FudGhpLE5haWR1LFksWSxZLE4NCk1hbmdlc2gsTWF2aW5LdXJ2ZSxZLFksWSxODQpNZWdobmEsTWF2aW5LdXJ2ZSxZLFksWSxODQpHdXJ1ZHV0dCxNYXZpbkt1cnZlLE4sWSxOLE4NClNhZGhhbmEsTWF2aW5LdXJ2ZSxOLFksTixODQpOaXJhaixUaGFtYmluYXlhZ2FtLFksWSxZLE4NCk1haXRoaWxpLFRoYW1iaW5heWFnYW0sWSxZLFksTg0KUHJhZGVlcCxOYWlyLFksTixZLE4NCk5pbmEsTmFpcixZLE4sWSxODQpNYW5vaixTcml2YXN0YXZhLE4sTixZLE4NCk1vbmEsU3JpdmFzdGF2YSxOLE4sWSxODQpTdWRoaXIsUHVuamFiaSxOLE4sWSxODQpOZWVyamEsUHVuamFiaSxOLE4sWSxODQpDaGludGFuLEphaW4sTixOLFksTg0KTW9uaWNhLEphaW4sTixOLFksTg0KQmhhc2thcixDaG93ZGh1cnksWSxZLFksTg0KTmlsYSxDaG93ZGh1cnksWSxZLFksTg0KTXVyYWxpLEl5ZXIsTixZLE4sTg0KR2VldGEsSXllcixOLFksTixODQpDaGlub28sQmFsaWdhLFksWSxZLFkNClJ1cGEsQmFsaWdhLFksWSxZLFkNCkthdXNoaWssQmFsaWdhLFksWSxZLFkNClRhcG9zaGksUGFpLE4sWSxOLE4NClVwZW5kcmEsUGFpLE4sWSxOLE4NClN1dmFybmEsTWFua2lrYXIsTixZLE4sTg0KU2FkYW5hbmFuZCxNYW5raWthcixOLFksTixODQpNYW5vaixQYWksWSxZLFksTg0KU2F2aXRhLFBhaSxZLFksWSxODQpBa3NoYXQsUGFpLFksWSxZLE4NCkFkdmFpdGgsUGFpLFksWSxZLE4NCkFrc2hhdCdzLFBhcnRuZXIsWSxZLFksTg0KQWR2YWl0aCdzLFBhcnRuZXIsWSxZLFksTg0KU2FjaGluLFNoZW5veSxZLFksWSxODQpBa3NoYXRhLFNoZW5veSxZLFksWSxODQpTYW50b3NoLEtpbmksWSxZLFksWQ0KRWxzLEtpbmksWSxZLFksWQ0KTmltYXksS2luaSxZLFksWSxZDQpOaWxheWEsS2luaSxZLFksWSxZDQpEaW5lc2gsUGFpLFksWSxZLFkNCkFuaXRhLFBhaSxZLFksWSxZDQpBZGl0eWEsUGFpLFksWSxZLFkNClNhcmFoLE9sc2VuLFksWSxZLFkNCkthcnRoaWssS2luaSxZLFksWSxZDQpSYWdodXZlZXIsTmF5YWssWSxZLFksWQ0KQW5pdGEsTmF5YWssWSxZLFksWQ0KTmFuZGluaSxOYXlhayxZLFksWSxZDQpTaWQsTmF5YWssWSxZLFksWQ0KUHJha2FzaCxOYXlhayxZLFksWSxZDQpTYW5qb3ksUHJhYmh1LFksWSxZLFkNClNhbmRoeWEsUHJhYmh1LFksWSxZLFkNCkFydW4sUHJhYmh1LFksWSxZLFkNCk1hZGhhdixLaW5pLFksWSxZLFkNClNhbmphbSxLaW5pLFksWSxZLFkNCkFuaSxLaW5pLFksWSxZLFkNClRhbmlzaGthLEtpbmksWSxZLFksWQ0KVmFzYW50LEJhbGlnYSxZLFksWSxZDQpNb25pY2EsQmFsaWdhLFksWSxZLFkNCkdheWF0cmksS2luaSxZLFksWSxZDQpTYW5qdSxLaW5pLFksWSxZLFkNClJvaGFuLEtpbmksWSxZLFksWQ0KUmlua3UsS2luaSxZLFksWSxZDQpSYWh1bCxLaW5pLFksWSxZLFkNClRyaXNoYSwsWSxZLFksWQ0KTGVlbmEsRGVvZGhhcmUsWSxOLFksTg0KU2FuamVldixEZW9kaGFyZSxZLE4sWSxODQpBbmp1bGksRGVvZGhhcmUsWSxOLFksTg0KTmFtaXRhLERlb2RoYXJlLFksTixZLE4NCk5pdGluLFNhd2FudCxZLFksWSxODQpKYXNtaW5lLFNhd2FudCxZLFksWSxODQpTaWRkaGFudCxTYXdhbnQsWSxOLFksTg0KRWxseSxTYXdhbnQsWSxOLFksTg0KVmlqYXksU2hpcm9ka2FyLE4sWSxOLE4NCkFwYXJuYSxTaGlyb2RrYXIsTixZLE4sTg0KTWVkaGEsRGF0ZSxZLFksWSxODQpQcmFrYXNoLERhdGUsWSxZLFksTg0KTW9uaXNoYSxEYXRlLFksWSxZLE4NClJhdmksS2FyZ3V0a2FyLFksWSxZLE4NCk1lZXJhdGFpLEthcmd1dGthcixZLFksWSxODQpSYW5pLE5lbmUsTixOLFksTg0KTWlsaW5kLE5lbmUsTixOLFksTg0KS3J1dGlrYSxOZW5lLE4sTixZLE4NClN3YXRpLFZhaWR5YSxZLFksWSxODQpBYmhheSxWYWlkeWEsWSxZLFksTg0KU3VqZWV0LEtpbmksWSxZLFksWQ0KVmFuaXRhLEtpbmksWSxZLFksWQ0KVHdpc2hhLEtpbmksWSxZLFksWQ0KQW1hciwsWSxZLFksWQ0KS2F0aGVyaW5lLFBhY2lzLE4sWSxOLE4NCkthdGhlcmluZSdzLFBhcnRuZXIsTixZLE4sTg0KU2hhbGluaSxTaGV0aCxZLE4sWSxODQpTdW5pbCxTaGV0aCxZLE4sWSxODQpCZW5uZXR0LFJvdWxlYXUsWSxZLFksWQ0KSXNhYmVsbGEsR3JlY28sWSxZLFksWQ0KVGhvbWFzLFN5ZXIsWSxZLFksWQ0KTWljaGFlbCxMZXdpcyxZLFksWSxODQpLeWxlLENvbnN0YW50aW4sWSxZLFksTg0KUm9iZXJ0LExhemllcixZLFksWSxODQpLaW0sTGFuZ2F0LFksWSxZLE4NCkFpZGFuLEJsYWNrbW9yZSxZLFksWSxODQpBbWFuZGEsLFksWSxZLE4NCkFkcmlhbixGaWxpY2UsWSxZLFksTg0KVGVycmksSm9uZXMsWSxZLFksTg0KTW9sbHksUmVldmVzLFksWSxZLE4NCkFsZWphbmRyYSxNZXphLFksWSxZLE4NClJ5YW4sQmVubmV0dCxZLFksWSxODQpNYXJrLEhhcnBlcixZLFksWSxODQpUYW1hcmEsLFksWSxZLE4NCkx1a2FzLFNhbnRpbmcsWSxZLFksTg0KU29waGllLCxZLFksWSxODQpTYWJhLFlhcixOLE4sWSxODQpBbmRyZXcsSHVsbCxOLE4sWSxODQpDaHJpcyxLb2xpb3MsTixOLFksTg0KTmljayxEaWxvcmV0byxOLE4sWSxODQpWYW5pYSwsTixOLFksTg0KU2hydXRpLFNoYWgsWSxZLFksTg0KRGV2YW5zaCxTaGFoLFksWSxZLE4NCkFrc2hhcixTaGFoLFksWSxZLE4NCkNlbHluLCxZLFksWSxODQpDb2x0b24sV29vZCxZLFksWSxODQpKZXNzaWNhLFJhbW9zLFksWSxZLE4NCkphY29iLFZhbkhlbGRlcixZLFksWSxODQpFdmUsLFksWSxZLE4NCkVtbWV0dCxOZWhlbGksWSxZLFksTg0KRXZhbixBbmRyZXdzLFksWSxZLE4NCkJhcmJhcmEsSGVsZCxOLFksWSxODQpTdGVwaGVuLEhlbGQsTixZLFksTg0KRGFuaWVsLEhlbGQsTixZLFksTg0KQXJpZWxsZSxCZXJnZXIsTixZLFksTg0KS2FyZW4sSGVsZCxOLFksWSxODQpQZXRlcixXZWluc3RlaW4sTixZLFksTg0KU3VlLE1hcmtzLE4sWSxZLFkNCkdyZWcsTWFya3MsTixZLFksWQ0KSG93YXJkLFdpc2VtYW4sTixZLFksTg0KVGVyZXphLEJhcnRhLE4sWSxZLE4NCkp1bGlhbixMZWl6ZXJvdmljaSxOLFksWSxODQpUcmluYSxNY1F1ZWVuLE4sWSxZLE4NClRyaW5hJ3MsR3Vlc3QsTixZLFksTg0KRmFiaW8sQmFzc28gTW9udGFuYXJpLE4sWSxZLE4NCkRpYW5hLEdvbHRzLE4sWSxZLE4NCkFuaXJ1ZGgsTmF0aGFuLE4sWSxOLE4NClNocmF2YW50aGksTmF0aGFuLE4sWSxOLE4NCkhlbWEsS3VtYXJlc2FuLE4sWSxZLE4NCkt1bWFyZXNoLEt1bWFyZXNhbixOLFksWSxODQpNdXN0YXBoYSxXYWhhYixZLFksWSxODQpOYW5kYSxLaXNob3JlLFksWSxZLFkNCk5hbmRpbmksS2lzaG9yZSxZLFksWSxZDQpHYXVyaSxQYXRlbCxZLFksWSxODQpQcmF2aW4sUGF0ZWwsWSxZLFksTg0KR2VldGFuamFsaSxOYWlrLFksWSxZLE4NClNhbWlyLE5haWssWSxZLFksTg0KTmVlbmEsU2hldHR5LFksWSxZLE4NCkJhbGEsU2hldHR5LFksWSxZLE4NClBhcnZhdGksU2VzaGFkcmksWSxZLFksTg0KU3JpLFNlc2hhZHJpLFksWSxZLE4NCkdpbGxpYW4sSXZleSxZLE4sWSxODQpLZXZpbixLaW0sWSxOLFksTg0KTWFyYWwsTWFmaSxZLE4sWSxODQpNYXlhLE1hbGxhcixZLFksWSxZDQpNYXlhJ3MsR3Vlc3QsWSxZLFksWQ0KRGl2eWEsS2luaSxZLFksWSxZDQpBYmhpaml0LEtpbmksWSxZLFksWQ0KRGl2eWEncyxHdWVzdCxZLFksWSxZDQpEaXZ5YSdzLEd1ZXN0LFksWSxZLFkNCkFzaHdpbmkgS2FtYXRoLEJoYXQsTixZLE4sTg0KQXJ1bixCaGF0LE4sWSxOLE4NCkFua2l0YSxCaGF0LE4sWSxOLE4NClNoYXJhbixLYXJhbnRoLE4sWSxOLE4NCkFrc2hhdGEsS2FyYW50aCxOLFksTixODQpUYXJhLEthcmFudGgsTixZLE4sTg0KUmFtIE1vaGFuLEtpbmksTixZLE4sTg0KS3VtdWRhLEtpbmksTixZLE4sTg0KRGhhcm1iYXBhLE5heWFrLFksWSxZLFkNCkNoaXRyYSxOYXlhayxZLFksWSxZDQpBam95LFByYWJodSxZLFksWSxZDQpKZW5ueSxQcmFiaHUsWSxZLFksWQ0KSG9uLExlb25nLE4sWSxZLE4NCkV2YSxTby1MZW9uZyxOLFksWSxODQpEYW4sVHpvdHppcyxOLFksWSxODQpNZWxpc3NhLFR6b3R6aXMsTixZLFksTg0KR2FpbCxLYXR6LFksWSxZLFkNCkxlZSxLYXR6LFksWSxZLFkNCkxpemEsR3VldmFycmEsTixZLFksWQ0KVG9ueSxHdWV2YXJyYSxOLFksWSxZDQpKb3ksTWFuZ2VsLE4sWSxZLFkNClJvYmJ5LFN0ZWluLE4sWSxZLFkNClNoYXluYSxaZWxjZXIsTixZLFksWQ0KT3JlbiwsTixZLFksWQ0KSWRhbixTaGFsZXYsWSxZLFksWQ0KU3VuaXRhLFJhbyxOLFksWSxODQpTYWksUmFvLE4sWSxZLE4NClJhamVuZHJhLEtpbmksWSxZLFksWQ0KU3VzaG1hLEtpbmksWSxZLFksWQ0KSnlvdGksU2hlbm95LFksWSxZLFkNClN1cmVzaCxTaGVub3ksWSxZLFksWQ0KTmVlcGEsQ2hha3JhYm9ydGksWSxZLFksTg0KSmFzcHJlZXQsQmFuZ2EsWSxZLFksTg0KU2hhbmthcixEYXNndXB0YSxZLFksTixODQpTdXphbm5lLERhc2d1cHRhLFksWSxOLE4NCkdlZXRhbmphbGksRGFzZ3VwdGEsWSxZLE4sTg0KTmlyYW5qYW4sS2FtYXRoLFksWSxZLE4NCkdlZXRhLEthbWF0aCxZLFksWSxODQpWZWVuYSxOYXlhayxOLFksTixODQpSYWdodSxOYXlhayxOLFksTixODQpTaGFzaGlrYW50LE5heWFrLFksWSxOLE4NCkRlZXBhLE5heWFrLFksWSxOLE4NClNyaWthbnQsTmF5YWssWSxZLE4sTg0KU3VqYXRhLE5heWFrLFksWSxOLE4NCkFuZWVzaCxTaGluZ3dla2FyLFksWSxOLE4NCktzaGl0aSxTaGluZ3dla2FyLFksWSxOLE4NCkFsaSAoWHVlZmVuZyksV2FuZyxOLFksWSxODQpNYW5kaXAsU2luZ2gsWSxZLE4sTg0KQW1hbixEaGFuZHdhcixZLFksTixODQo="
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