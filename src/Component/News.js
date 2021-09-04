import React, { Component } from 'react'
import NewsItem from './NewsItem'
import './styleReadMore.scss';


export default class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Adam Liptak",
            "title": "Texas’ Near-Ban on Abortions Takes Effect After Supreme Court Fails to Act - The New York Times",
            "description": "The court is still expected to rule soon on an emergency application from abortion providers seeking to block the measure, which is now the most restrictive abortion law in the nation.",
            "url": "https://www.nytimes.com/2021/09/01/us/supreme-court-texas-abortion.html",
            "urlToImage": "https://static01.nyt.com/images/2021/08/31/us/politics/31dc-scotus/31dc-scotus-facebookJumbo.jpg",
            "publishedAt": "2021-09-01T05:33:04Z",
            "content": "Supreme Court precedents forbid states from banning abortion before fetal viability, the point at which fetuses can sustain life outside the womb, or about 22 to 24 weeks.\r\nBut the Texas law was draf… [+1350 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The A.V. Club"
            },
            "author": "Matt Schimkowitz",
            "title": "Kiss postpones tour dates after Gene Simmons tests positive for COVID - The A.V. Club",
            "description": "The announcement comes as singer Paul Stanley recovers from the virus",
            "url": "https://www.avclub.com/kiss-postpones-tour-dates-after-gene-simmons-tests-posi-1847595735",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/2bb82ad922f287569692623227a7b280.png",
            "publishedAt": "2021-09-01T04:09:00Z",
            "content": "Iconic 70s rock band Kiss postponed a string of tour dates after announcing bassist Gene Simmons tested positive for COVID. The news comes just as the bands lead singer, Paul Stanley, recovers from t… [+2074 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "XDA Developers"
            },
            "author": "Rich Woods",
            "title": "Microsoft is booting ineligible Windows 11 PCs out of the Windows Insider Program - XDA Developers",
            "description": "As it already promised it would do, Microsoft is starting to kick ineligible Windows 11 PCs out of the Windows Insider Program.",
            "url": "https://www.xda-developers.com/microsoft-ineligible-windows-11-pcs-out-of-windows-insider-program/",
            "urlToImage": "https://www.xda-developers.com/files/2021/06/Windows-11-option-7.jpg",
            "publishedAt": "2021-09-01T03:02:00Z",
            "content": "When Microsoft originally announced Windows 11, it was quickly discovered that Microsoft had made some drastic changes to the system requirements. Most importantly, there are some strict requirements… [+2592 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "Mark Osborne",
            "title": "1 rescued, 5 unaccounted for after Navy helicopter crashes off San Diego coast - ABC News",
            "description": "",
            "url": "https://abcnews.go.com/US/navy-helicopter-crashes-off-san-diego-coast/story?id=79758979",
            "urlToImage": "https://s.abcnews.com/images/US/mh-60s-file-ap-mo-20210831_1630464379123_hpMain_16x9_992.jpg",
            "publishedAt": "2021-09-01T02:48:45Z",
            "content": "A U.S. Navy helicopter crashed Tuesday afternoon off the coast of San Diego.\r\n\"An MH-60S helicopter embarked aboard USS Abraham Lincoln (CVN 72) crashed into the sea while conducting routine flight o… [+727 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KING5.com"
            },
            "author": "Ted Land",
            "title": "First Seattle Children's patient dies of COVID-19 - KING5.com",
            "description": "An increasing number of young people statewide are being hospitalized with COVID, while parents wait for vaccines to be approved for children under 12.",
            "url": "https://www.king5.com/article/news/health/coronavirus/first-seattle-childrens-patient-dies-of-covid-19/281-92f50d63-70a6-4e89-8178-87bed185b48d",
            "urlToImage": "https://media.king5.com/assets/KING/images/7218b9da-5852-41a9-86e8-7b6f4664b00b/7218b9da-5852-41a9-86e8-7b6f4664b00b_1140x641.jpg",
            "publishedAt": "2021-09-01T02:47:00Z",
            "content": "SEATTLE Seattle Childrens lost its first patient to COVID-19, the medical center announced Tuesday.\r\nWe are saddened to confirm that the first patient death from COVID-19 at Seattle Childrens occurre… [+2154 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Samuel Chamberlain",
            "title": "WH corrects Biden claim '90 percent' of Americans out of Afghanistan - New York Post ",
            "description": "The White House had to correct President Joe Biden’s error on stating the correct percentage of Americans who managed to get out of Afghanistan during his address to the country.",
            "url": "https://nypost.com/2021/08/31/biden-claim-90-percent-of-americans-out-of-afghanistan-edited-by-white-house/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/08/biden-evacuation-numbers-index.jpg?quality=90&strip=all&w=1024",
            "publishedAt": "2021-09-01T02:36:00Z",
            "content": "President Biden appeared to get his math wrong during his address to the nation Tuesday on the withdrawal from Afghanistan by misstating the percentage of Americans who managed to get out of the war-… [+3165 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Sara Ashley O'Brien, CNN Business",
            "title": "Jury selection kicks off in Elizabeth Holmes' criminal trial - CNN",
            "description": "Jury selection began Tuesday in a San Jose federal courtroom for the long-awaited trial of Elizabeth Holmes, the former CEO and founder of Theranos.",
            "url": "https://www.cnn.com/2021/08/31/tech/elizabeth-holmes-theranos-jury-selection/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210831153613-06-elizabeth-holmes-theranos-fraud-trial-jury-selection-0831-super-tease.jpg",
            "publishedAt": "2021-09-01T01:48:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "ATP Tour"
            },
            "author": "ATP Tour",
            "title": "Novak Djokovic Overcomes Hiccup To Beat Holger Rune At US Open - ATP Tour",
            "description": "Djokovic Overcomes Hiccup To Beat Rune At US Open",
            "url": "https://www.atptour.com/en/news/djokovic-rune-us-open-2021-tuesday",
            "urlToImage": "https://www.atptour.com/-/media/images/news/2021/09/01/01/24/djokovic-us-open-2021-tuesday-volley.jpg",
            "publishedAt": "2021-09-01T01:40:40Z",
            "content": "It was not a perfect start to his chase for the Grand Slam, but Novak Djokovic escaped unscathed on Tuesday evening and reached the second round of the US Open.\r\nAfter a second-set hiccup, the World … [+3428 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Dead Space Original Voice Actor For Isaac Clarke Returns In Remake | GameSpot News - GameSpot",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9UXdHWEhtamJNa0XSAQA?oc=5",
            "urlToImage": null,
            "publishedAt": "2021-09-01T01:23:16Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "",
            "title": "Florida Is Blocking Money From 2 School Districts Over Mask Mandates, Defying A Judge - NPR",
            "description": "A judge ruled Gov. Ron DeSantis' ban on school mask mandates \"is without legal authority\" and can't be enforced. But that's not stopping the state board of education from withholding paychecks.",
            "url": "https://www.npr.org/2021/08/31/1033067718/florida-schools-mask-mandates-desantis",
            "urlToImage": "https://media.npr.org/assets/img/2021/08/31/ap21230692034167_wide-c26ee4c9d919b7e07fcffb5b5d901ccf4968d9c7.jpg?s=1400",
            "publishedAt": "2021-09-01T00:48:43Z",
            "content": "Florida Governor Ron DeSantis speaks at the opening of a monoclonal antibody site Wednesday, Aug. 18, 2021, in Pembroke Pines, Fla. DeSantis has sought to block schools from requiring masks for stude… [+3802 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Jack Baer",
            "title": "Urban Meyer admits players' vaccination status played role in Jaguars' roster cuts - Yahoo Sports",
            "description": "The NFLPA says it is investigating Meyer's comments.",
            "url": "https://sports.yahoo.com/urban-meyer-jaguars-players-vaccinations-roster-cuts-nfl-003606203.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/vyt30alJH7ZO510WqXxpQQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2021-09/79ce37d0-0abc-11ec-adb9-067d6d0f4573",
            "publishedAt": "2021-09-01T00:36:00Z",
            "content": "Like 31 other NFL teams, the Jacksonville Jaguars announced their 53-man roster for the 2021-22 season on Tuesday.\r\nUsually, deciding which player makes the cut comes down to their current talent, th… [+3494 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Www.https"
            },
            "author": "New York Post",
            "title": "Meghan Markle bullying claims 'rescinded' by palace staff: report - Fox News",
            "description": "Allegations of bullying against Meghan Markle made by palace staffers have reportedly been \"rescinded.\"",
            "url": "https://www.https://pagesix.com/2021/08/31/palace-staffers-rescinded-meghan-markle-bullying-claims-book/",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/03/markle3.jpg",
            "publishedAt": "2021-09-01T00:24:55Z",
            "content": "The two Buckingham Palace staffers who accused Meghan Markle of bullying reportedly rescinded their claims.\r\nRoyal reporters Omid Scobie and Carolyn Durand claimed in the epilogue of their newly upda… [+2567 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Times of Israel"
            },
            "author": null,
            "title": "On DC trip, Bennett’s approach to Iran – and governing – took amorphous shape - The Times of Israel",
            "description": "Premier points at wisdom of his multi-faceted effort against Tehran and spirit of unity in his coalition, but he'll have to show more boldness going forward if he intends to lead",
            "url": "https://www.timesofisrael.com/on-dc-trip-bennetts-approach-to-iran-and-governing-took-amorphous-shape/",
            "urlToImage": "https://static.timesofisrael.com/www/uploads/2021/08/AP21239597868278-1024x640.jpg",
            "publishedAt": "2021-09-01T00:23:59Z",
            "content": "Naftali Bennett’s first visit to Washington as prime minister was a fairly low-stakes affair.\r\nHe came at a time when US government and media attention were focused elsewhere, on the unfolding disast… [+6934 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Mark Daniels, USA TODAY",
            "title": "Cam Newton and Brian Hoyer cut, leaving rookie Mac Jones as only active quarterback on Patriots' 53-man roster - USA TODAY",
            "description": "With Cam Newton and Brian Hoyer released, and Jarrett Stidham placed on the PUP list, rookie Mac Jones is the only QB on the Patriots' 53-man roster.",
            "url": "https://www.usatoday.com/story/sports/nfl/patriots/2021/08/31/new-england-patriots-roster-53-players-cuts-trades-unable-to-perform/5674389001/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2021/09/01/USAT/b582a46d-55d2-4fdd-a907-c7636aa2ca35-USATSI_16590616.jpg?auto=webp&crop=2566,1443,x0,y0&format=pjpg&width=1200",
            "publishedAt": "2021-09-01T00:07:12Z",
            "content": "Cutdown day was a busy one for the Patriots on Tuesday. The team had the news of the day when they released Cam Newton, which paves the way for rookie Mac Jones to start at quarterback.\r\nThat wasn’t … [+4538 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Jessica Guynn, USA TODAY",
            "title": "Kevin McCarthy warns GOP majority 'will not forget' if companies turn over phone records to Jan. 6 committee - USA TODAY",
            "description": "The House Minority Leader warned \"a Republican majority will not forget\" telecom companies that turn over phone records to congressional investigators",
            "url": "https://www.usatoday.com/story/tech/2021/08/31/trump-capitol-riot-insurrection-mccarthy-threat-apple-verizon/5674059001/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2021/05/19/USAT/bd5d7b0e-a3e2-4277-945c-a28a105bfba9-AP_Congress_Divided_Repbulicans.jpg?auto=webp&crop=3197,1799,x0,y0&format=pjpg&width=1200",
            "publishedAt": "2021-08-31T23:47:09Z",
            "content": "House Minority Leader Kevin McCarthy warned \"a Republican majority will not forget\" telecommunications companies that turn over phone records to the congressional committee investigating the Jan. 6  … [+1405 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "2021 NFL roster cuts: Our 32 takeaways include Cam Newton's surprising release, key trades, and more - CBS Sports",
            "description": "An unusual cutdown day included some surprising roster moves",
            "url": "https://www.cbssports.com/nfl/news/2021-nfl-roster-cuts-our-32-takeaways-include-cam-newtons-surprising-release-key-trades-and-more/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2021/03/19/5a8effe2-d991-4b77-b79d-7bdf169b7e7e/thumbnail/1200x675/3afa947dd14c4159f0e3c5971745c766/cam-newton-1400.jpg",
            "publishedAt": "2021-08-31T23:44:00Z",
            "content": "This year's final cutdown day was already going to be different. Typically, the NFL's deadline for teams to announce their 53-man rosters took place on the Saturday before the first week of the regul… [+13009 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Leslie Josephs",
            "title": "Southwest pilots' union sues carrier over changes to work rules during pandemic travel slump - CNBC",
            "description": "The Southwest pilots' union's suit shows mounting tension between the airline and some of its employees.",
            "url": "https://www.cnbc.com/2021/08/31/southwest-pilots-union-sues-carrier-over-changes-to-work-rules-during-pandemic-travel-slump.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106312336-1577364895942gettyimages-532196656.jpeg?v=1577365003",
            "publishedAt": "2021-08-31T23:30:17Z",
            "content": "Southwest pilots' union sued the carrier this week, alleging the airline violated federal labor laws by altering work rules during the pandemic travel slump without negotiating the changes.\r\nThose in… [+1719 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Lauren M. Johnson, CNN",
            "title": "A Lake Tahoe resident played the violin as his family sat at standstill in Caldor Fire evacuation traffic - CNN",
            "description": "An artist from Lake Tahoe played music while on the road to put the anxiety of evacuating from the Caldor Fire behind him, if only for a moment.",
            "url": "https://www.cnn.com/2021/08/31/us/lake-tahoe-resident-stops-to-play-the-violin-in-evacuation-traffic-trnd/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210831150539-mel-smothers-caldor-fire-evacuation-0830-super-tease.jpg",
            "publishedAt": "2021-08-31T23:14:00Z",
            "content": null
        }
    ]
    constructor(){
        super();
        this.state = {
            articles : this.articles,
        }
    }
    async componentDidMount(){
        // componentDidMount() always Run After render() fuction
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=3f23d69092df4a47a2152163c0e65f7c";
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
    }

    render() {
        return (
            <div className="container my-3">
            <div>
                <h2 style={{fontWeight:900}} className="my-2">NewsMon - Top Headline</h2>
                <div className="row">
                    {this.state.articles.map((ele)=>{
                        return(
                            <div className="col-md-4" key={ele.url}>
                            <NewsItem  title={ele.title} description={ele.description} imgUrl={ele.urlToImage} link={ele.url} />  
                            </div>
                        )
                    })}    
                </div>
            </div>
            </div>
            
        )
    }
}

