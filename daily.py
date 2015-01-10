import csv

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
            dailycount = 0
            day = row[2][:len(day)]

print dc.reverse()