const fieldTextMap = ['零', '一', '二', '三', '四', '五', '六', '七'];
const maxLengthMap = [2, 3, 4, 4, 2, 1, 1, 1];
let fields = [];
let fieldT = [];
let indexArr = [0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 1; i <= 7; i++) {
    fields.push(`level_${i}`);
    fieldT.push(`${fieldTextMap[i]}级`);
}

const defaultSelectedData = {
    1: {
        INDEX: [[ '1_3' ]],
        LAST: [ '1_3' ],
        KEY: { 'level_1': [ '1_3' ] }
    },
    2: {
        INDEX: [[ '1_3' ], [ '2_7' ]],
        LAST: [ '2_7', '2_9', '2_10', '2_11', '2_12' ],
        KEY: { 'level_1': [ '1_3' ], 'level_2': [ '2_7' ] }
    },
    3: {
        INDEX: [[ '1_3' ], [ '2_7' ], [ '3_22' ]],
        LAST: [ '3_22', '3_25', '3_26', '3_27', '3_28', '3_33', '3_34', '3_35', '3_36', '3_37', '3_38',
        '3_39', '3_40', '3_41', '3_42', '3_43', '3_44', '3_45', '3_46', '3_47', '3_48' ],
        KEY: { 'level_1': [ '1_3' ], 'level_2': [ '2_7' ], 'level_3': [ '3_22' ] }
    },
    4: {
        INDEX: [[ '1_3' ], [ '2_7' ], [ '3_22' ], [ '4_46' ]],
        LAST: [ '4_43', '4_44', '4_46', '4_49', '4_50', '4_51', '4_52', '4_53', '4_54', '4_55', '4_56',
        '4_65', '4_66', '4_67', '4_68', '4_69', '4_70', '4_71', '4_72', '4_73', '4_74', '4_75', '4_76',
         '4_77', '4_78', '4_79', '4_80', '4_81', '4_82', '4_83', '4_84', '4_85', '4_86', '4_87', '4_88',
         '4_89', '4_90', '4_91', '4_92', '4_93', '4_94', '4_95', '4_96' ],
        KEY: { 'level_1': [ '1_3' ], 'level_2': [ '2_7' ], 'level_3': [ '3_22' ], 'level_4': [ '4_46' ] }
    },
    5: {
        INDEX: [[ '1_3' ], [ '2_7' ], [ '3_22' ], [ '4_46' ], []],
        KEY: { 'level_1': [ '1_3' ], 'level_2': [ '2_7' ], 'level_3': [ '3_22' ],
        'level_4': [ '4_46' ], 'level_5': [] },
        LAST: [ '5_43', '5_44', '5_46', '5_49', '5_50', '5_51', '5_52', '5_53', '5_54', '5_55', '5_56',
        '5_65', '5_66', '5_67', '5_68', '5_69', '5_70', '5_71', '5_72', '5_73', '5_74', '5_75', '5_76',
        '5_77', '5_78', '5_79', '5_80', '5_81', '5_82', '5_83', '5_84', '5_85', '5_86', '5_87', '5_88',
        '5_89', '5_90', '5_91', '5_92', '5_93', '5_94', '5_95', '5_96' ]
    }
};
// 生成树组件的一个选项
const generateItem = (level, maxLevel) => {
    let keyName = 'key';
    let textName = 'text';
    indexArr[level]++;
    return {
        [keyName]: `${level}_${indexArr[level]}`,
        [textName]: `测试${fieldTextMap[level]}级${indexArr[level]}`
    };
};
// 生成对应level的一组 树
const generateList = (level, maxLevel) => {
    let levelList = [];
    const randomNum = maxLengthMap[level];
    for (let i = 0; i < randomNum; i++) {
        let item = generateItem(level, maxLevel);
        if (level !== maxLevel) {
            item[`level_${level + 1}`] = generateList(level + 1, maxLevel);
        }
        levelList.push(item);
    }
    return levelList;
};
// 读取整棵树，挑一些做默认值
const generateConfig = (depth) => {
    indexArr = [0, 0, 0, 0, 0, 0, 0, 0];
    return {
        fields: fields.slice(0, depth),
        fieldTexts: fieldT.slice(0, depth),
        initData: {
            level_1: generateList(1, depth)
        },
        defaultSelectedData: defaultSelectedData[depth]
    };
};

export default generateConfig;
