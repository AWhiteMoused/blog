hexo.extend.injector.register('body_end',`
    <link rel="stylesheet" crossorigin href="https://g.alicdn.com/aliyun-documentation/web-chatbot-ui/0.0.11/index.css" />
    <script type="module" crossorigin src="https://g.alicdn.com/aliyun-documentation/web-chatbot-ui/0.0.11/index.js"></script>
    <script>
      window.CHATBOT_CONFIG = {
        endpoint: "https://awhitemousedai-ytedrjwltd.cn-hangzhou.fcapp.run/chat", // 可以替换为 https://{your-fc-http-trigger-domain}/chat
        displayByDefault: false, // 默认不展示 AI 助手聊天框
        aiChatOptions: { // aiChatOptions 中 options 会传递 aiChat 组件，自定义取值参考：https://docs.nlkit.com/nlux/reference/ui/ai-chat
          conversationOptions: { // 自定义取值参考：https://docs.nlkit.com/nlux/reference/ui/ai-chat#conversation-options
            conversationStarters: [
              {prompt: '你是谁？'},
              {prompt: '这个博主是谁？'},
            ]
          },
          displayOptions: { // 自定义取值参考：https://docs.nlkit.com/nlux/reference/ui/ai-chat#display-options
            height: 600,
          },
          personaOptions: { // 自定义取值参考：https://docs.nlkit.com/nlux/reference/ui/ai-chat#chat-personas
            assistant: {
              name: '你好，我是你的 AI 助手',
              // AI 助手的图标
              avatar: 'https://img.alicdn.com/imgextra/i2/O1CN01Pda9nq1YDV0mnZ31H_!!6000000003025-54-tps-120-120.apng',
              tagline: '您可以尝试点击下方的快捷入口开启体验！',
            }
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
      /* webchat 对话框如果被遮挡，可以尝试通过 z-index、bottom、right 等设置来调整位置 */
      .webchat-container {
        z-index: 100;
        bottom: 10px;
        right: 10px;
      }
      /* webchat 的唤起按钮如果被遮挡，可以尝试通过 z-index、bottom、right 等设置来调整位置 */
      .webchat-bubble-tip {
        z-index: 99;
        bottom: 20px;
        right: 20px;
      }
    </style>`
    );