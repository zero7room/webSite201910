/**
 * @file selector 生成器，返回可以合并 state 和指定数据的 selector
 * Created by jingwei
 */
export default function () {

    // 保存接受到的数据
    let args = arguments;

    // 返回 selector 函数
    return function (state) {

        // 把先前接受的到数据和 state 合并返回
        return $.extend.apply($, Array.prototype.concat.apply([{}], args).concat(state));
    }
};