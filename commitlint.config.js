/**
 * @type {import('cz-git').UserConfig}
 */
module.exports = {
    rules: {
        'body-leading-blank': [1, 'always'],
        'body-max-line-length': [2, 'always', 100],
        'footer-leading-blank': [1, 'always'],
        'footer-max-line-length': [2, 'always', 100],
        'header-max-length': [2, 'always', 100],
        'subject-case': [
            2,
            'never',
            ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
        ],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'type-enum': [
            2,
            'always',
            [
                'build',
                'chore',
                'ci',
                'docs',
                'feat',
                'fix',
                'perf',
                'refactor',
                'revert',
                'style',
                'test',
            ],
        ],
    },
    prompt: {
        skipQuestions: ['scope'],
        messages: {
            type: '选择你要提交的类型',
            scope: '选择一个提交范围（可选）',
            customScope: '请输入自定义的提交范围',
            subject: '填写变更的简短描述\n',
            body: '填写更加详细的变更描述（可选）。使用 "|" 换行\n',
            breaking: '列举非兼容性的变更（可选）。使用 "|" 换行\n',
            footerPrefixsSelect: '选择关联 issue 前缀（可选）',
            customFooterPrefixs: '输入自定义 issue 前缀',
            footer: '列举关联的 issue (可选) 例如: #12, #34\n',
            confirmCommit: '是否提交或修改 commit',
        },
        types: [
            { value: 'feat',     name: 'feat:     新增功能' },
            { value: 'fix',      name: 'fix:      修复缺陷' },
            { value: 'docs',     name: 'docs:     文档更新' },
            { value: 'style',    name: 'style:    代码格式' },
            { value: 'refactor', name: 'refactor: 代码重构' },
            { value: 'perf',     name: 'perf:     性能提升' },
            { value: 'test',     name: 'test:     测试相关' },
            { value: 'build',    name: 'build:    构建相关' },
            { value: 'ci',       name: 'ci:       持续集成' },
            { value: 'chore',    name: 'chore:    其他修改' },
            { value: 'revert',   name: 'revert:   回退代码' },
        ],
        scopes: [],
        allowCustomScopes: true,
        allowEmptyScopes: true,
        allowCustomIssuePrefixs: false,
        issuePrefixs: [
            { 'value': 'issue', 'name': 'issue'},
        ],
    }
}
