;
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? module.exports = factory()
    : typeof define === 'function' && define.amd
      ? define(factory)
      : global.moduleName = factory()
}
  (this,
  (function () {
    class Valicator {
        constructor(data) {
            this.data = data
            this.result = [];
            this.msg = {
                notNull: '不能为空',
                isPhone: '不合法'
            }
            this.init();
        }
        init() {
            for (var i in this.data) {
                let part = this.data[i]
                let rules = part['rules']
                let value = part['value']
                let key = part['key']
                rules.forEach(item => {
                    if (typeof item === 'string') {
                        if (!this[item](value)) {
                            this.result.push(key + this.msg[item])
                        }
                    }
                    else if (typeof item === 'object') {
                        if(!item['func'](value)) {
                            this.result.push(item['msg'])
                        }
                    }
                })
            }
        }

        notNull(value) {
            let val = value.trim()
            return val != '' && val != undefined && val != null
        }

        isPhone(str) {
            return /^1[34578]\d{9}$/.test(str)
        }
    }
    return Valicator
  })
  )
);
