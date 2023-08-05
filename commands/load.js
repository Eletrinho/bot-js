const { SlashCommandBuilder } = require('discord.js')
const backup = require("discord-backup")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('load')
        .setDescription('Carrega algum backup')
        .addStringOption(option => 
            option
                .setName('backupid')
                .setDescription("Id do backup que deseja carregar.")
                .setRequired(true)),

    async execute(interaction) {
        const id = interaction.options.getString("backupid")
        
        backup.remove(id)
        await interaction.reply(`O backup no ID ${id} foi apagado.`)
    }
    }