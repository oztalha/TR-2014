import csv
from datetime import datetime, timedelta

def dailyNediyor():
    day = r'http://nediyor.com/2015/01/09/'
    with open('news.csv','rU') as f:
        f.readline()
        mydata = csv.reader(f)
        dailycount = 0
        dc = []
        for row in mydata:
            if row[2][:len(day)] == day:
                dailycount += int(row[1])
            else:
                dc.append(dailycount)
                dailycount = int(row[1])
                day = row[2][:len(day)]
        dc.append(dailycount)
    dc.reverse()
    

def dailyTheplazz():
    day = r'1/11/2015 0:00'
    with open('US-news-dates-sorted.csv','rU') as f:
        f.readline() #skip the header line
        mydata = csv.reader(f)
        dailycount = 0
        dc = []
        for row in mydata:
            if row[0] == day:
                dailycount += int(row[1])
            else:
                dc.append(dailycount)
                dailycount = int(row[1])
                for i in range((datetime.strptime(day.split()[0], "%m/%d/%Y")-datetime.strptime(row[0].split()[0], "%m/%d/%Y")).days-1):
                    dc.append(0)
                day = row[0]
                
        dc.append(dailycount)
    
    dc.reverse()
    print dc

if __name__ == '__main__':
    dailyTheplazz()