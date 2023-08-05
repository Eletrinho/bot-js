const { SlashCommandBuilder } = require('discord.js')
const backup = require("discord-backup")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('remove')
        .setDescription('Apaga um backup')
        .addStringOption(option => 
            option
                .setName('backupid')
                .setDescription("Id do backup que deseja remover.")
                .setRequired(true)),

    async execute(interaction) {
        const id = interaction.options.getString("backupid")
        
        backup.remove(id)
        await interaction.reply(`O backup no ID ${id} foi apagado.`)
    }
    }