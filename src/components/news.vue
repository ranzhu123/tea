<template>
    <div>
        <router-link v-for="item,index in news" :key="index" :to="'/news/'+index"><p>{{item}}</p></router-link>
    </div>
</template>

<script>
    export default {
        props: {
            news: {
                default () {
                    return [
                        '第一条',
                        '第2条',
                        '第3条',
                        '第4条',
                        '第5条',
                        '第6条',
                        '第7条',
                        '第8条'
                    ];
                }
            }
        },
        data () {
            return {
                content: {

                }
            };
        },
        methods: {
            handleOpen (key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose (key, keyPath) {
                console.log(key, keyPath);
            }
        }
    };
</script>
