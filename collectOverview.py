# -*- coding: utf-8 -*-
"""
Created on Thu Jan 08 15:41:01 2015

@author: Talha
"""

from splinter import Browser
import time
import pandas as pd

browser = Browser('firefox')
#Nediyor Turkiye haberleri sayfasi
browser.visit("http://nediyor.com/haberler/turkiye/")

#sayfanin sonuna git - her defasinda 18 yeni haber yukleniyor
for i in range(100):
    browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(5)

main = browser.find_by_id("brick-wrap").first
news = main.find_by_xpath("//div[@class='brick brick-big']")
df_news = pd.DataFrame(columns=('href', 'title', 'twcount'))
for haber in news:
    title = haber.find_by_tag("h2").find_by_tag("a")
    href = title['href']
    title = title.html
    twcount = haber.find_by_xpath("div[@class='tweet-count']").first.find_by_tag("a").html
    df_news.loc[len(df_news)+1]=[href,title,int(twcount)]
    
df_news.to_csv("haberler.csv",encoding='utf-8',index=False)