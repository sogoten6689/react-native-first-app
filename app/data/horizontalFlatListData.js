var horizontalStatus = {
    rainy: {
        ios: "ios-rainy",
        android: "md-rainy",
    },
    cloud: {
        ios: "ios-cloud",
        android: "md-cloud",
    },
    thunderstorm: {
        ios: "ios-thunderstorm",
        android: "md-thunderstorm",
    },
    sunny: {
        ios: "ios-sunny",
        android: "md-sunny",
    },
};
var horizontalFlatListData = [
    {
        "hour": "1 AM",
        "status": horizontalStatus.rainy,
        "degress": 57,
    },
    {
        "hour": "2 AM",
        "status": horizontalStatus.cloud,
        "degress": 43,
    },
    {
        "hour": "3 AM",
        "status": horizontalStatus.thunderstorm,
        "degress": 60,
    },
    {
        "hour": "4 AM",
        "status": horizontalStatus.rainy,
        "degress": 57,
    },
    {
        "hour": "5 AM",
        "status": horizontalStatus.cloud,
        "degress": 43,
    },
    {
        "hour": "6 AM",
        "status": horizontalStatus.sunny,
        "degress": 60,
    },
    {
        "hour": "7 AM",
        "status": horizontalStatus.sunny,
        "degress": 57,
    },
    {
        "hour": "8 AM",
        "status": horizontalStatus.sunny,
        "degress": 43,
    },
    {
        "hour": "9 AM",
        "status": horizontalStatus.sunny,
        "degress": 60,
    },
]

export {horizontalStatus};
export {horizontalFlatListData};