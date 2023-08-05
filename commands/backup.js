const { SlashCommandBuilder } = require('discord.js')
const backup = require("discord-backup")
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('backup')
        .setDescription('Faz backup'),

    async execute(interaction) {
        await interaction.reply("Fazendo backup...")
        .then(() => {backup.create(interaction.member.guild, {
                maxMessagesPerChannel: 10,
                jsonBeautify: true,
    
            }).then((backupData) => {
                interaction.editReply(`:white_check_mark: Backup salvo no id **${backupData.id}**`)
            });
        })
    }
    }