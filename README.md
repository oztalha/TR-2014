# Commentary Tweets of the *Influentials*
Analyzing curated tweets of opinion-shapers and newsmakers provided by [nediyor.com](http://nediyor.com) and [theplazz.com](http://theplazz.com) to understand the dynamics of the news in the US and in Turkey.

On the news that made to the headlines we collected about two years of curated tweets data for the United States (156,480 tweets of 1400 commentators on 7464 news since January 2013), and one and a half years of curated tweets data for Turkey (169,849 tweets on 8982 news since May 2013).

## Data Collection
### Counts of comments on news
* Filenames starting with `scrape-` :
  * Selenium (as a Python API) is used to scrape the data from the main pages of the websites.
  * Scrolled down 600 times to overcome the lazy loading feature of the sites.

### Individual comments
* To get individual comments data downloaded ~9000 htmls from the links scraped from the main pages.
  * That was quicker than expected when the task is parallelized: `nohup sh -c "cat urls.txt | xargs -n 1 -P 10 wget " &`
  * The compressed files for [nediyor(190MB)](https://www.dropbox.com/s/ff9vpwpr9gdpimy/nediyor_news.zip) and [theplazz(105MB)](https://www.dropbox.com/s/e1go8wzkzvobeci/theplazz_news.zip) are on dropbox.

## Data Analysis
### Daily Commentary Statistics
* `Aggregate-daily` & `container.js` :
  * Counts of comments on news are aggregated by day and visualized
  * Time series data is visualized using [Highcarts JS](http://www.highcharts.com/demo/line-time-series).

### Commentator Statistics
* `commentators-stats.py` calculates and visualizes the following statistics: 
   * Comment counts by commentator
   * Group commentators by profession
   * Monthly commentator performance
   * ...

## Initial Findings
* Daily comment count visualization is [here](http://talhaoz.com/news/)
  
## Issues
### Erroneous Data Files
* `nediyor_news` html files:
  * multiple urls in twtext of first 45447 rows are concatanated without a space character in between
  * ['index.html.358.2', 'index.html.377', 'index.html.397.3', 'index.html.492.8', 'index.html.787.6', 'index.html.989.1']
