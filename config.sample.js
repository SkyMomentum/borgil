module.exports = {
    "debug": false,
    "commandchar": ".",
    "buffer": 100,
    "logconsole": true,
    "logfile": "raw.log",
    "dbdir": "db",
    "admins": [
        "saltire"
    ],
    "networks": {
        "oftc": {
            "host": "irc.oftc.net",
            "nick": "borgil",
            "opts": {
                "port": 6697,
                "secure": true,
                "selfSigned": true,
                "userName": "borgil",
                "realName": "Borgil of Menelvagor"
            },
            "nickserv_password": "password",
            "nickserv_channels": ["#torontocrypto"],
            "nickserv_channel_keywords": {
                "#torontocrypto": "keyword"
            }
        },
        "i2p": {
            "host": "localhost",
            "nick": "borgil",
            "opts": {
                "port": 6668,
                "userName": "borgil",
                "realName": "Borgil of Menelvagor"
            },
            "nickserv_channels": ["#torontocrypto"],
            "nickserv_password": "password"
        }
    },
    "plugins": {
        "rss": {
            "interval": 10,
            "item_template": "[{{color}}{{name}}{{reset}}] {{title}} | {{url}}",
            "list_template": " {{network}} {{target}} {{color}}{{name}}{{reset}} {{url}}"
        }
    }
};
