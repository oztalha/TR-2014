# -*- coding: utf-8 -*-
"""
Created on Thu Jan 08 15:41:01 2015

@author: Talha
"""

# coding: utf-8
from splinter import Browser
import time

browser = Browser('firefox')
#Nediyor Turkiye haberleri sayfasi
browser.visit("http://nediyor.com/haberler/turkiye/")
main = browser.find_by_id("brick-wrap").first
#links are titles: 1,13,25...
haberler = main.find_by_xpath("//div[@class='brick brick-big']")
print len(haberler)
for haber in haberler:
    print haber.find_by_tag("h2").find_by_tag("a").html
