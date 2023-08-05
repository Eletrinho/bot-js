const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const backup = require("discord-backup")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('listar')
        .setDescription('BackupId list'),

    async execute(interaction) {
        
        await interaction.reply(`carregando`)
        .then(() => backup.list().then((backups) => {
            let emb = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Lista dos IDs dos Backups')
            let num = 1
            for (i of backups) {
                emb.addFields({name: `Backup ${num}`, value: `ID: ${i}`})
                num = num + 1
            }
            interaction.editReply({embeds: [emb]})
        }));
        }
    }