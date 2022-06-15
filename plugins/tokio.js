let handler = async m => m.reply(`
☕ *Mokio :* a whatsapp bot\n\n🔗 *URL :* https://github.com
`.trim()) // repository
handler.help = ['tokio']
handler.tags = ['info']
handler.command = /^tokio|repo$/i

module.exports = handler
