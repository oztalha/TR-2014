# -*- coding: utf-8 -*-
"""
Created on Tue Jan 13 15:05:35 2015

@author: Talha Oz @tozCSS
"""

import pandas as pd
from bs4 import BeautifulSoup

soup = BeautifulSoup(open("index.html.384"), "lxml")
twfeed = soup.findAll('div',attrs = {'class':'twitter-text'})
for tw in twfeed:
    links = tw.findAll('a')
    twhandle = links[1].text
    twtext = ''
    for i in range(3,6):
        if links[i].text == '':
            break
        twtext += links[i].text
    print twhandle,twtext