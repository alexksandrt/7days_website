var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.755441116558721,
          "pitch": -0.05258669422683582,
          "rotation": 0,
          "target": "1-exterior"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.1043206463477944,
          "pitch": 0.006983825108317632,
          "title": "Kitchen",
          "text": "a bustling hub where culinary creations come to life. With its gleaming stainless steel appliances and ample counter space, it invites creativity and serves as a gathering place for cooking enthusiasts."
        },
        {
          "yaw": -2.931720983495495,
          "pitch": 0.05854413730582664,
          "title": "Small Bedroom",
          "text": "thoughtfully divided by glass walls, creating an illusion of openness while maintaining privacy. The translucent panels allow natural light to permeate the space, giving it an airy and modern ambiance."
        },
        {
          "yaw": -1.8546113329325298,
          "pitch": 0.2949753265700945,
          "title": "Sofa",
          "text": "The relaxation area on the sofa is an inviting space that exudes comfort and tranquility. With plush cushions and soft textiles, it provides a cozy haven where one can sink into blissful relaxation. "
        }
      ]
    },
    {
      "id": "1-exterior",
      "name": "Exterior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06514640133264216,
          "pitch": -0.03490963711325179,
          "rotation": 6.283185307179586,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.501957762615671,
          "pitch": 0.10761248362451781,
          "title": "Pool",
          "text": "Refresh your brain"
        }
      ]
    }
  ],
  "name": "360 Panorama Demo",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
