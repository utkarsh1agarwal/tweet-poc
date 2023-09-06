import { Component } from '@angular/core';
import { ApiConnectionService } from './service/api-connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tweet-poc';
  newMessage = ''
  isAddNewTweet = false;
  isLoadUser = false;
  isLoadUserAll = false;
  user = ''
  userAll = ''
  contact_details = [
    {
        "id": "a632e2e4-9758-4554-9fb7-ba62288bfcd7",
        "name": "RA",
        "members": [
            "Milan",
            "Anshupriya",
            "Utkarsh",
            "Santosh"
        ],
        "lead": "Parashar",
        "group": "RA"
    }
]

  constructor( private api: ApiConnectionService) {

    this.api.get_contact().subscribe((r:any) => {
      if(r) {
        this.contact_details = r
      }
    })

  }

  user_data = {
    "tweetList": [
        {
            "id": "61b4912820b008733ec97e36",
            "text": "All these automated DMs wasting my time :) I get 100 per day at least. Here's a 4-second loop for your enjoyment. LOL",
            "authorId": "user1",
            "createdDate": "Sat Dec 11 11:53:12 GMT 2021"
        },
        {
            "id": "61b4f36d2bca291a37d0e0b2",
            "text": "All these automated DMs wasting my time :) I get 100 per day at least. Here's a 4-second loop for your enjoyment. LOL",
            "authorId": "user1",
            "createdDate": "Sat Dec 11 18:52:29 GMT 2021"
        },
        {
            "id": "61b69f14f0843d11b6028205",
            "text": "All these automated DMs wasting my time :) I get 100 per day at least. Here's a 4-second loop for your enjoyment. LOL",
            "authorId": "user1",
            "createdDate": "Mon Dec 13 01:17:08 GMT 2021"
        },
        {
            "id": "61b77081f4000e520cec82a9",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Mon Dec 13 16:10:41 UTC 2021"
        },
        {
            "id": "61b77ba4f4000e520cec82ab",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Mon Dec 13 16:58:12 UTC 2021"
        },
        {
            "id": "61b78501f4000e520cec82ad",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Mon Dec 13 17:38:09 UTC 2021"
        },
        {
            "id": "61b78591f4000e520cec82ae",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Mon Dec 13 17:40:33 UTC 2021"
        },
        {
            "id": "61b794a5f4000e520cec82bb",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Mon Dec 13 18:44:53 UTC 2021"
        },
        {
            "id": "61bb2dadf4000e520cec82c5",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Thu Dec 16 12:14:37 UTC 2021"
        },
        {
            "id": "61b0e4e7fdcf0216ccea99bd",
            "text": "The Change in Quality Score Reporting: What REALLY Happened? | WordStream http://www.wordstream.com/blog/ws/2013/08/26/quality-score-reporting-change … (@WordStream)",
            "authorId": "user1",
            "createdDate": "Wed Dec 08 17:01:26 GMT 2021"
        },
        {
            "id": "61b76eb8f4000e520cec82a8",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Mon Dec 13 16:03:04 UTC 2021"
        },
        {
            "id": "61b79395f4000e520cec82b4",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Mon Dec 13 18:40:21 UTC 2021"
        },
        {
            "id": "61b79454f4000e520cec82ba",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Mon Dec 13 18:43:32 UTC 2021"
        },
        {
            "id": "61b7976df4000e520cec82be",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Mon Dec 13 18:56:45 UTC 2021"
        },
        {
            "id": "61b8630cf4000e520cec82c0",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Tue Dec 14 09:25:32 UTC 2021"
        },
        {
            "id": "61b8b2eaf4000e520cec82c1",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Tue Dec 14 15:06:18 UTC 2021"
        },
        {
            "id": "61b36fadbe09f430366fcd94",
            "text": "Tying the knot doesn't have to cost a fortune. See how this #bride saved over $20K",
            "authorId": "user1",
            "createdDate": "Fri Dec 10 15:18:05 GMT 2021"
        },
        {
            "id": "61b77640f4000e520cec82aa",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Mon Dec 13 16:35:12 UTC 2021"
        },
        {
            "id": "61b78ac2f4000e520cec82af",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Mon Dec 13 18:02:42 UTC 2021"
        },
        {
            "id": "61b78cecf4000e520cec82b1",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Mon Dec 13 18:11:56 UTC 2021"
        },
        {
            "id": "61b7920bf4000e520cec82b3",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Mon Dec 13 18:33:47 UTC 2021"
        },
        {
            "id": "61b79422f4000e520cec82b7",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Mon Dec 13 18:42:42 UTC 2021"
        },
        {
            "id": "61b79429f4000e520cec82b8",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Mon Dec 13 18:42:49 UTC 2021"
        },
        {
            "id": "61b795a7f4000e520cec82bc",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Mon Dec 13 18:49:11 UTC 2021"
        },
        {
            "id": "61b8624cf4000e520cec82bf",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Tue Dec 14 09:22:20 UTC 2021"
        },
        {
            "id": "61ba484ef4000e520cec82c3",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Wed Dec 15 19:55:58 UTC 2021"
        },
        {
            "id": "61ba4859f4000e520cec82c4",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Wed Dec 15 19:56:09 UTC 2021"
        },
        {
            "id": "61c0f9dcf4000e520cec82c6",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Mon Dec 20 21:47:08 UTC 2021"
        },
        {
            "id": "61b4917520b008733ec97e37",
            "text": "All these automated DMs wasting my time :) I get 100 per day at least. Here's a 4-second loop for your enjoyment. LOL",
            "authorId": "user1",
            "createdDate": "Sat Dec 11 11:54:29 GMT 2021"
        },
        {
            "id": "61b49dc059a22663a4344fde",
            "text": "Just warning you… this book has real life dialog. The characters drop the F-bomb on occasion 🙂 COWBOY TAKE ME AWAY http://ow.ly/lKwx5 (@PenelopeChilds)",
            "authorId": "user1",
            "createdDate": "Sat Dec 11 12:46:56 GMT 2021"
        },
        {
            "id": "61b77c32f4000e520cec82ac",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Mon Dec 13 17:00:34 UTC 2021"
        },
        {
            "id": "61b78b72f4000e520cec82b0",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Mon Dec 13 18:05:38 UTC 2021"
        },
        {
            "id": "61b7917cf4000e520cec82b2",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Mon Dec 13 18:31:24 UTC 2021"
        },
        {
            "id": "61b793e9f4000e520cec82b5",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Mon Dec 13 18:41:45 UTC 2021"
        },
        {
            "id": "61b793f3f4000e520cec82b6",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Mon Dec 13 18:41:55 UTC 2021"
        },
        {
            "id": "61b79430f4000e520cec82b9",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Mon Dec 13 18:42:56 UTC 2021"
        },
        {
            "id": "61b7972af4000e520cec82bd",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Mon Dec 13 18:55:38 UTC 2021"
        },
        {
            "id": "61b9cceff4000e520cec82c2",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Wed Dec 15 11:09:35 UTC 2021"
        },
        {
            "id": "64f85f4c3aa60d4b8b10a1ab",
            "text": "Test Tweet from Collection",
            "authorId": "user1",
            "createdDate": "Wed Sep 06 12:15:24 BST 2023"
        }
    ]
  }

  all_data = {
    "tweetDetailsList": [
        {
            "username": "user1",
            "tweetList": [
                {
                    "id": "61b4912820b008733ec97e36",
                    "text": "All these automated DMs wasting my time :) I get 100 per day at least. Here's a 4-second loop for your enjoyment. LOL",
                    "authorId": "user1",
                    "createdDate": "Sat Dec 11 11:53:12 GMT 2021"
                },
                {
                    "id": "61b4f36d2bca291a37d0e0b2",
                    "text": "All these automated DMs wasting my time :) I get 100 per day at least. Here's a 4-second loop for your enjoyment. LOL",
                    "authorId": "user1",
                    "createdDate": "Sat Dec 11 18:52:29 GMT 2021"
                },
                {
                    "id": "61b69f14f0843d11b6028205",
                    "text": "All these automated DMs wasting my time :) I get 100 per day at least. Here's a 4-second loop for your enjoyment. LOL",
                    "authorId": "user1",
                    "createdDate": "Mon Dec 13 01:17:08 GMT 2021"
                },
                {
                    "id": "61b77081f4000e520cec82a9",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Mon Dec 13 16:10:41 UTC 2021"
                },
                {
                    "id": "61b77ba4f4000e520cec82ab",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Mon Dec 13 16:58:12 UTC 2021"
                },
                {
                    "id": "61b78501f4000e520cec82ad",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Mon Dec 13 17:38:09 UTC 2021"
                },
                {
                    "id": "61b78591f4000e520cec82ae",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Mon Dec 13 17:40:33 UTC 2021"
                },
                {
                    "id": "61b794a5f4000e520cec82bb",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Mon Dec 13 18:44:53 UTC 2021"
                },
                {
                    "id": "61bb2dadf4000e520cec82c5",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Thu Dec 16 12:14:37 UTC 2021"
                },
                {
                    "id": "61b0e4e7fdcf0216ccea99bd",
                    "text": "The Change in Quality Score Reporting: What REALLY Happened? | WordStream http://www.wordstream.com/blog/ws/2013/08/26/quality-score-reporting-change … (@WordStream)",
                    "authorId": "user1",
                    "createdDate": "Wed Dec 08 17:01:26 GMT 2021"
                },
                {
                    "id": "61b76eb8f4000e520cec82a8",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Mon Dec 13 16:03:04 UTC 2021"
                },
                {
                    "id": "61b79395f4000e520cec82b4",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Mon Dec 13 18:40:21 UTC 2021"
                },
                {
                    "id": "61b79454f4000e520cec82ba",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Mon Dec 13 18:43:32 UTC 2021"
                },
                {
                    "id": "61b7976df4000e520cec82be",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Mon Dec 13 18:56:45 UTC 2021"
                },
                {
                    "id": "61b8630cf4000e520cec82c0",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Tue Dec 14 09:25:32 UTC 2021"
                },
                {
                    "id": "61b8b2eaf4000e520cec82c1",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Tue Dec 14 15:06:18 UTC 2021"
                },
                {
                    "id": "61b36fadbe09f430366fcd94",
                    "text": "Tying the knot doesn't have to cost a fortune. See how this #bride saved over $20K",
                    "authorId": "user1",
                    "createdDate": "Fri Dec 10 15:18:05 GMT 2021"
                },
                {
                    "id": "61b77640f4000e520cec82aa",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Mon Dec 13 16:35:12 UTC 2021"
                },
                {
                    "id": "61b78ac2f4000e520cec82af",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Mon Dec 13 18:02:42 UTC 2021"
                },
                {
                    "id": "61b78cecf4000e520cec82b1",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Mon Dec 13 18:11:56 UTC 2021"
                },
                {
                    "id": "61b7920bf4000e520cec82b3",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Mon Dec 13 18:33:47 UTC 2021"
                },
                {
                    "id": "61b79422f4000e520cec82b7",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Mon Dec 13 18:42:42 UTC 2021"
                },
                {
                    "id": "61b79429f4000e520cec82b8",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Mon Dec 13 18:42:49 UTC 2021"
                },
                {
                    "id": "61b795a7f4000e520cec82bc",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Mon Dec 13 18:49:11 UTC 2021"
                },
                {
                    "id": "61b8624cf4000e520cec82bf",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Tue Dec 14 09:22:20 UTC 2021"
                },
                {
                    "id": "61ba484ef4000e520cec82c3",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Wed Dec 15 19:55:58 UTC 2021"
                },
                {
                    "id": "61ba4859f4000e520cec82c4",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Wed Dec 15 19:56:09 UTC 2021"
                },
                {
                    "id": "61c0f9dcf4000e520cec82c6",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Mon Dec 20 21:47:08 UTC 2021"
                },
                {
                    "id": "61b4917520b008733ec97e37",
                    "text": "All these automated DMs wasting my time :) I get 100 per day at least. Here's a 4-second loop for your enjoyment. LOL",
                    "authorId": "user1",
                    "createdDate": "Sat Dec 11 11:54:29 GMT 2021"
                },
                {
                    "id": "61b49dc059a22663a4344fde",
                    "text": "Just warning you… this book has real life dialog. The characters drop the F-bomb on occasion 🙂 COWBOY TAKE ME AWAY http://ow.ly/lKwx5 (@PenelopeChilds)",
                    "authorId": "user1",
                    "createdDate": "Sat Dec 11 12:46:56 GMT 2021"
                },
                {
                    "id": "61b77c32f4000e520cec82ac",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Mon Dec 13 17:00:34 UTC 2021"
                },
                {
                    "id": "61b78b72f4000e520cec82b0",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Mon Dec 13 18:05:38 UTC 2021"
                },
                {
                    "id": "61b7917cf4000e520cec82b2",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Mon Dec 13 18:31:24 UTC 2021"
                },
                {
                    "id": "61b793e9f4000e520cec82b5",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Mon Dec 13 18:41:45 UTC 2021"
                },
                {
                    "id": "61b793f3f4000e520cec82b6",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Mon Dec 13 18:41:55 UTC 2021"
                },
                {
                    "id": "61b79430f4000e520cec82b9",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Mon Dec 13 18:42:56 UTC 2021"
                },
                {
                    "id": "61b7972af4000e520cec82bd",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Mon Dec 13 18:55:38 UTC 2021"
                },
                {
                    "id": "61b9cceff4000e520cec82c2",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Wed Dec 15 11:09:35 UTC 2021"
                },
                {
                    "id": "64f85f4c3aa60d4b8b10a1ab",
                    "text": "Test Tweet from Collection",
                    "authorId": "user1",
                    "createdDate": "Wed Sep 06 12:15:24 BST 2023"
                }
            ]
        },
        {
            "username": "user2",
            "tweetList": [
                {
                    "id": "61b0e589fdcf0216ccea99be",
                    "text": "This Louisville #startup @collabramusic may have found the missing piece in music collaboration http://ow.ly/o9ppB (@startuptechguy)",
                    "authorId": "user2",
                    "createdDate": "Wed Dec 08 17:04:09 GMT 2021"
                }
            ]
        },
        {
            "username": "user3",
            "tweetList": [
                {
                    "id": "61b0e5a9fdcf0216ccea99bf",
                    "text": "The cure for hating the gym is this!! http://bit.ly/IirNGi #Health #Fitness #fitnessKit #physicalHealth #music #musculartraining (@hipmomjulie)",
                    "authorId": "user3",
                    "createdDate": "Wed Dec 08 17:04:41 GMT 2021"
                }
            ]
        },
        {
            "username": "user4",
            "tweetList": [
                {
                    "id": "61b0e5c6fdcf0216ccea99c0",
                    "text": "SEO Tactics You Think Are OK, but Are Really Just Spam http://nblo.gs/Oyqp3 (@mayrabor)",
                    "authorId": "user4",
                    "createdDate": "Wed Dec 08 17:05:10 GMT 2021"
                },
                {
                    "id": "61b0e639fdcf0216ccea99c3",
                    "text": "Tying the knot doesn't have to cost a fortune. See how this #bride saved over $20K on her #wedding: http://po.st/IbpZyg (@davidsbridal)",
                    "authorId": "user4",
                    "createdDate": "Wed Dec 08 17:07:05 GMT 2021"
                }
            ]
        }
    ]
}

  loadUser() {
    // console.log(this.user_data.tweetList)
    if(this.user && this.user != "") {
      this.api.load_user_tweets(this.user).subscribe((res:any) => {
        if(res) {
          this.user_data = res
          this.isLoadUser = true;
        }
      })
    }
    else {
      alert("Please enter user")
    }
  }

  addTweet() {
    // console.log('message', this.user)
    if(this.newMessage && this.newMessage != "") {
      this.api.add_tweet(this.user, this.newMessage).subscribe((res:any) => {
        if(res) {
          alert("Tweet Added successfully.")
        }
      })
    }
    else {
      alert("Please enter message")
    }
  }

  loadUserAll() {
    // console.log(this.user_data.tweetList)
    if(this.userAll && this.userAll != "") {
      this.api.load_user_tweets_all(this.userAll).subscribe((res:any) => {
        if(res) {
          this.all_data = res
          this.isLoadUserAll = true;
        }
      })
    }
    else {
      alert("Please enter user")
    }
  }


  
}
