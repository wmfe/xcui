<template>
    <div>
        <h3>Autocomplete</h3>

        <div class="block-item">
            <h4>string数组 sugs:</h4>
            <table class="table table-striped table-bordered" style="width:400px">
                <thead>
                    <tr>
                        <th>dataText</th>
                        <th>dataValue</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>constellation : {{constellation}}</td>
                        <td>constellationValue : {{constellationValue}}</td>
                    </tr>
                </tbody>
            </table>

            <div style="width:200px">
                    <Autocomplete id="constellation"
                                name="constellation"
                                placeholder="请输入星座"
                                :data-text.sync="constellation"
                                :data-value.sync="constellationValue"
                                :suggestions="constellationSuggestions">
                    </Autocomplete>
            </div>
        </div>

        <div class="block-item">
            <h4>object数组 sugs:</h4>
            <table class="table table-striped table-bordered" style="width:400px">
                <thead>
                    <tr>
                        <th>dataText</th>
                        <th>dataValue</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>cityName : {{cityName}}</td>
                        <td>cityId : {{cityId}}</td>
                    </tr>
                </tbody>
            </table>

            <div style="width:200px">
                    <Autocomplete id="city"
                                name="city"
                                placeholder="请输入城市"
                                :data-text.sync="cityName"
                                :data-value.sync="cityId"
                                :suggestions="citySuggestions">
                    </Autocomplete>
            </div>
        </div>

        <div class="block-item">
            <h4>远程sug，string数组 sugs:</h4>
            <table class="table table-striped table-bordered" style="width:400px">
                <thead>
                    <tr>
                        <th>dataText</th>
                        <th>dataValue</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>requestWord : {{requestWord}}</td>
                        <td> </td>
                    </tr>
                </tbody>
            </table>

            <div style="width:200px">
                    <Autocomplete placeholder=""
                                :check=false
                                :data-text.sync="requestWord"
                                :suggestions="remoteSug"
                                :input-callback="request">>
                    </Autocomplete>
            </div>
        </div>

        <div class="block-item">
            <h4>远程sug，object数组 sugs:</h4>
            <table class="table table-striped table-bordered" style="width:400px">
                <thead>
                    <tr>
                        <th>dataText</th>
                        <th>dataValue</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>requestWord2 : {{requestWord2}}</td>
                        <td>requestValue2 : {{requestValue2}}</td>
                    </tr>
                </tbody>
            </table>

            <div style="width:200px">
                    <Autocomplete placeholder=""
                                :check=false
                                :data-text.sync="requestWord2"
                                :data-value.sync="requestValue2"
                                :suggestions="remoteSug2"
                                :input-callback="request2">
                    </Autocomplete>
            </div>
        </div>

    </div>
</template>

<script>
import Autocomplete from '../components/autocomplete';

export default {
    components: {
        Autocomplete
    },
    data() {
        return {
            cityName: '',
            cityId: '',
            citySuggestions: [
                {
                    text: '北京',
                    value: '131'
                },
                {
                    text: '上海',
                    value: '289'
                },
                {
                    text: '海口',
                    value: '125'
                },
                {
                    text: '三亚',
                    value: '121'
                },
                {
                    text: '杭州',
                    value: '179'
                },
                {
                    text: '成都',
                    value: '75'
                },
                {
                    text: '贵阳',
                    value: '146'
                }
            ],
            constellation: '',
            constellationValue: '',
            constellationSuggestions: [
                '水瓶',
                '双鱼',
                '白羊',
                '金牛',
                '双子',
                '巨蟹',
                '狮子',
                '处女',
                '天秤',
                '天蝎',
                '射手',
                '魔羯'
            ],
            requestWord: '',
            remoteSug: [],
            remoteUrl: 'http://suggestion.baidu.com/su?cb=window.bdsug.sug&wd=',
            requestWord2: 'w',
            requestValue2: '',
            remoteSug2: [],
            remoteUrl2: 'http://suggestion.baidu.com/su?cb=window.bdsug.sug2&wd='
        };
    },
    watch: {
    },
    methods: {
        setSug(s) {
            this.remoteSug = s;
        },
        setSug2(s) {
            this.remoteSug2 = s.map((item, index) => {
                return {
                    text: item,
                    value: index
                };
            });
        },
        request() {
            let url = this.remoteUrl + this.requestWord;
            let script = document.createElement('script');
            script.src = url;
            document.body.appendChild(script);
            script.onload = function (res) {
                document.body.removeChild(script);
            };
        },
        request2() {
            let url = this.remoteUrl2 + this.requestWord2;
            let script = document.createElement('script');
            script.src = url;
            document.body.appendChild(script);
            script.onload = function (res) {
                document.body.removeChild(script);
            };
        }
    },
    ready() {
        let me = this;
        window.bdsug = {
            sug(res) {
                me.setSug(res.s);
            },
            sug2(res) {
                me.setSug2(res.s);
            }
        };
    }
};
</script>

<style lang="less" scoped>
    .block-item {

        margin:0 30px 50px;
        float:left;
    }
</style>
