import React from 'react';
import { Redirect } from "react-router-dom";
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';
import Home from '../application/Home';
import Album from '../application/Album';
import Singer from '../application/Singer';
import Search from '../application/Search';
import Person from '../application/Person';

export default [
  {
    path: "/",
    exact: true,
    component: Person
  },
  {
    path: "/music",
    component: Home,
    routes: [
      {
        path: "/music",
        exact: true,
        render: () => (
          <Redirect to={"/music/recommend/"}/>
        )
      },
      {
        path: "/music/recommend/",
        component: Recommend,
        routes: [
          {
            path: "/music/recommend/:id",
            component: Album
          }
        ]
      },
      {
        path: "/music/singers",
        component: Singers,
        routes: [
          {
            path: '/music/singers/:id',
            component: Singer
          }
        ]
      },
      {
        path: "/music/rank/",
        component: Rank,
        key: "rank",
        routes: [
          {
            path: "/music/rank/:id",
            component: Album
          }
        ]
      },
      {
        path: "/music/album/:id",
        exact: true,
        key: "album",
        component: Album
      },
      {
        path: "/music/search",
        exact: true,
        key: "search",
        component: Search
      }
    ]
  }
]