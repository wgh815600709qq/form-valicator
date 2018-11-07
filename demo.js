const Valicator = require('./index')
var data = {
    age: {
        key: '年龄',
        value: '17',
        rules: [
            {
                msg: '年龄只能为正整数',
                func: function(value) {
                    return /^\d+$/g.test(value)
                }
            },
            {
                msg: '您还未成年',
                func: function(value) {
                    return Number(value) >= 18
                }
            }
        ]
    },
    name: {
        key: '昵称',
        value: '',
        rules: ['notNull']
    },
    phone: {
        key: '手机号码',
        value: '1380013800',
        rules: ['isPhone']
    }
}

var msg = new Valicator(data).result
console.log(msg)