hexo.extend.injector.register('body_end',`
    <link rel="stylesheet" crossorigin href="https://g.alicdn.com/aliyun-documentation/web-chatbot-ui/0.0.24/index.css" />
    <script type="module" crossorigin src="https://g.alicdn.com/aliyun-documentation/web-chatbot-ui/0.0.24/index.js"></script>
    <script>
      window.CHATBOT_CONFIG = {
        endpoint: "https://blogai-function-naaxunidkp.cn-hangzhou.fcapp.run/chat", // 可以替换为 https://{your-fc-http-trigger-domain}/chat
        displayByDefault: true, // 默认不显示 AI 助手对话框
        title: 'AI 助手', // 自定义 AI 助手标题
        draggable: true, // 是否开启拖拽
        aiChatOptions: { // 自定义取值参考：https://docs.nlkit.com/nlux/reference/ui/ai-chat#conversation-options
          conversationOptions: { // 自定义取值参考：https://docs.nlkit.com/nlux/reference/ui/ai-chat#conversation-options
            conversationStarters: [
              {prompt: '你是谁？'},
              {prompt: '介绍一下本网站的博主吧'},
            ]
          },
          displayOptions: { // 自定义取值参考：https://docs.nlkit.com/nlux/reference/ui/ai-chat#display-options
            height: 600,
            // width: 400,
          },
          personaOptions: { // 自定义取值参考：https://docs.nlkit.com/nlux/reference/ui/ai-chat#chat-personas
            assistant: {
              name: '你好！我是本博客的猫娘AI助手——小华喵！',
              // AI 助手的图标
              avatar: 'https://img.alicdn.com/imgextra/i2/O1CN01Pda9nq1YDV0mnZ31H_!!6000000003025-54-tps-120-120.apng',
              tagline: '下面有几个问题，可以快速问我喵！',
            }
          },
          messageOptions: { // 自定义取值参考：https://docs.nlkit.com/nlux/reference/ui/ai-chat#message-options
            waitTimeBeforeStreamCompletion: 'never'
          }
        },
        dataProcessor: {
          /**
          * 在向后端大模型应用发起请求前改写 Prompt。
          * 比如可以用于总结网页场景，在发送前将网页内容包含在内，同时避免在前端显示这些内容。
          * @param {string} prompt - 用户输入的 Prompt
          * @param {string}  - 改写后的 Prompt
          */
          rewritePrompt(prompt) {
            return prompt;
          }
        }
      };
    </script>
    <style>
      :root {
        /* webchat 工具栏的颜色 */
        --webchat-toolbar-background-color: #1464E4;
        /* webchat 工具栏文字和按钮的颜色 */
        --webchat-toolbar-text-color: #FFF;
      }
      /* webchat 对话框如果被遮挡，可以尝试通过 z-index、bottom、right 等设置 来调整*/
      .webchat-container {
        z-index: 100;
        bottom: 10px;
        right: 10px;
      }
      /* webchat 的唤起按钮如果被遮挡，可以尝试通过 z-index、bottom、right 等设置 来调整。也可以通过 CSS 进一步定制唤起按钮的形状、大小等。 */
      .webchat-bubble-tip {
        z-index: 99;
        bottom: 20px;
        right: 100px;
      }
    </style>
  `
  );