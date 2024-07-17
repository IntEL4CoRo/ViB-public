{
  "options": {
    "environments": [
      {
        "name": "Apartment",
        "value": "apartment",
        "img": "https://intel4coro.github.io/coai-vib/img/apartment.png"}
    ],
    "robots": [
      {
        "name": "PR2",
        "value": "pr2",
        "img": "https://intel4coro.github.io/coai-vib/img/pr2_urdf_white1.png",
        "knowledge_bases": "https://data.open-ease.org/QA?neem_id=6526790ced1a1bfc415a1d38&q=findall%28%5BDuration%2C%20Evt%5D%2C%0A%20%20%28%20%20event_interval%28Evt%2C%20Begin%2C%20End%29%2C%0A%20%20%20%20%20number%28End%29%2C%0A%20%20%20%20%20Duration%20is%20End%20-%20Begin%0A%20%20%29%2C%0A%20%20Durations%29%2C%0Amax_member%28%5BMaxDuration%2C%20LongestEvt%5D%2C%20Durations%29"
      },
      {
        "name": "ARMAR-6",
        "value": "armar6",
        "img": "https://github.com/sunava/pycram/blob/binder-robot-manipulation-actions/demos/pycram_virtual_building_demos/img/A6_cropped_hq_fixed_tablet4_rdax_1200x2048.png?raw=true"
       }
    ]

  },
  "actions": [
    {
      "name": "Load episodic memory",
      "value": "openease",
      "description": "cutting VR",
      "url": "https://binder.intel4coro.de/v2/gh/ease-crc/bootstrapping_giskard/74a869a38b3b62da3054e1f8fc74d54ba908a873?urlpath=lab%2Ftree%2Fnotebooks%2Fneem_query.ipynb",
      "options": [
        "environments",
        "robots",
        "tasks"
      ]
    },
    {
      "name": "Inspect Knowledge Graph",
      "value": "akg",
      "description": "cutting KG",
      "url": "https://binder.intel4coro.de/v2/gh/Food-Ninja/WebKat-MealRobot/a8f389f4053b18155abead27b42139b549e0e605?urlpath=lab%2Ftree%2Fnotebooks%2FFindOutTask.ipynb",
      "options": [
        "environments",
        "robots",
        "tasks"
      ]
    },
    {
      "name": "Run Code",
      "value": "run",
      "description": "Run code on Binderhub.",
      "primary": true,
      "url": "https://binder.intel4coro.de/v2/gh/IntEL4CoRo/COAI/master?urlpath=lab%2Ftree%2Fnotebooks%2F",
      "options": [
        "environments",
        "robots"
      ],
      "available": {
        "environments=apartment|robots=pr2": "https://binder.intel4coro.de/v2/gh/sunava/pycram/be9d0c0a8a37d9ca154a956c04d9c01975e4aed3?urlpath=lab%2Ftree%2Fdemos%2Fpycram_virtual_building_demos%2Fcutting_actions%2Fcutting_demo.ipynb",
        "environments=apartment|robots=armar6": "https://binder.intel4coro.de/v2/gh/LucaKro/pycram/f61804babfbe54652a3080684561d5de6b3a2737?urlpath=lab%2Ftree%2Fdemos%2Fpycram_virtual_building_demos%2Fcutting_actions%2Fcutting_demo_armar.ipynb"
      }
    } 
  ]
}
