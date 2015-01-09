from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import pandas as pd
import time

df = pd.DataFrame(columns=('title', 'twcount', 'href'))

driver = webdriver.Chrome()
driver.get('file:///Users/toz/Documents/workspace/TR-2014/nediyor.html')
time.sleep(60)
news = driver.find_elements_by_xpath("//div[@class='brick brick-big']")
for i,haber in enumerate(news):
    title = haber.find_element_by_tag_name("h2").find_element_by_tag_name("a")
    twcount = haber.find_element_by_xpath("div[@class='tweet-count']").find_element_by_tag_name("a").text
    print i, title.text , twcount, title.get_attribute("href")
    df.loc[len(df)+1]=[title.text , twcount, title.get_attribute("href")]

df['twcount']=df['twcount'].astype(int)
df.to_csv("TR-news_2013-05-21-to-2015-01-08.csv",encoding='utf-8',index=False)