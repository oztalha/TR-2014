# -*- coding: utf-8 -*-
"""
Created on Mon Jan 12 12:31:19 2015

@author: Talha Oz @tozCSS
"""

import pandas as pd
import json
import urllib


results = json.load(urllib.urlopen("https://www.kimonolabs.com/api/chh9lp2m?apikey=VPXUp7hOkUYDIL3wC8GVMHFQcOW3O7HC"))
res2 = json.load(urllib.urlopen("https://www.kimonolabs.com/api/chh9lp2m?apikey=VPXUp7hOkUYDIL3wC8GVMHFQcOW3O7HC&kimoffset=2500"))
res3 = json.load(urllib.urlopen("https://www.kimonolabs.com/api/chh9lp2m?apikey=VPXUp7hOkUYDIL3wC8GVMHFQcOW3O7HC&kimoffset=5000"))

rows = results.get('results').get('collection1')
rows.extend(res2.get('results').get('collection1'))
rows.extend(res3.get('results').get('collection1'))

df = pd.DataFrame(columns=('newsdate', 'twcount', 'title',  'href'))
for r in rows:
    title  = r['manset']
    href   = r['tarih']['href'].split('#')[0]
    twcount= int(r['tarih']['text'].split('|')[1])
    newsdt = pd.to_datetime(r['tarih']['text'].split('|')[0].split(':')[1])
    df.loc[len(df)+1]=[newsdt,twcount,title,href]
    print newsdt,twcount,title,href

df['twcount']=df['twcount'].astype(int)
df.to_csv("US-news-dates.csv",encoding='utf-8',index=False)
#finally this file ("US-news-dates.csv") is sorted by date and renamed as US-news.csv