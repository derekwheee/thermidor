const testData = [
    {
        "location": "Outside",
        "temperature": 23.0,
        "humidity": 59,
        "timestamp": 1575096006000
    },
    {
        "location": "Outside",
        "temperature": 22,
        "humidity": 56,
        "timestamp": 1575096606000
    },
    {
        "location": "Outside",
        "temperature": 22,
        "humidity": 52,
        "timestamp": 1575097806000
    },
    {
        "location": "Outside",
        "temperature": 20,
        "humidity": 53,
        "timestamp": 1575098406000
    },
    {
        "location": "Outside",
        "temperature": 23,
        "humidity": 48,
        "timestamp": 1575099006000
    },
    {
        "location": "Outside",
        "temperature": 28,
        "humidity": 39,
        "timestamp": 1575099006000
    },
    {
        "location": "Outside",
        "temperature": 29,
        "humidity": 40,
        "timestamp": 1575099006000
    },
    {
        "location": "Outside",
        "temperature": 23,
        "humidity": 54,
        "timestamp": 1575099006000
    },
    {
        "location": "Outside",
        "temperature": 21,
        "humidity": 55,
        "timestamp": 1575099006000
    },
    {
        "location": "Outside",
        "temperature": 19,
        "humidity": 58,
        "timestamp": 1575099006000
    },
    {
        "location": "Living Room",
        "temperature": 28,
        "humidity": 23,
        "timestamp": 1575096006000
    },
    {
        "location": "Living Room",
        "temperature": 32.1,
        "humidity": 23,
        "timestamp": 1575096606000
    },
    {
        "location": "Living Room",
        "temperature": 32.1,
        "humidity": 23,
        "timestamp": 1575097806000
    },
    {
        "location": "Living Room",
        "temperature": 32.1,
        "humidity": 23,
        "timestamp": 1575098406000
    },
    {
        "location": "Living Room",
        "temperature": 32.1,
        "humidity": 23,
        "timestamp": 1575099006000
    },
    {
        "location": "Office",
        "temperature": 32.1,
        "humidity": 23,
        "timestamp": 1575096006000
    },
    {
        "location": "Office",
        "temperature": 32.1,
        "humidity": 23,
        "timestamp": 1575096606000
    },
    {
        "location": "Office",
        "temperature": 32.1,
        "humidity": 23,
        "timestamp": 1575097806000
    },
    {
        "location": "Office",
        "temperature": 32.1,
        "humidity": 23,
        "timestamp": 1575098406000
    },
    {
        "location": "Office",
        "temperature": 32.1,
        "humidity": 23,
        "timestamp": 1575099006000
    },
    {
        "location": "Shop",
        "temperature": 32.1,
        "humidity": 23,
        "timestamp": 1575096006000
    },
    {
        "location": "Shop",
        "temperature": 32.1,
        "humidity": 23,
        "timestamp": 1575096606000
    },
    {
        "location": "Shop",
        "temperature": 32.1,
        "humidity": 23,
        "timestamp": 1575097806000
    },
    {
        "location": "Shop",
        "temperature": 32.1,
        "humidity": 23,
        "timestamp": 1575098406000
    },
    {
        "location": "Shop",
        "temperature": 32.1,
        "humidity": 23,
        "timestamp": 1575099006000
    }
];

module.exports = (req, res) => {
    res.status(200).send(testData)
}