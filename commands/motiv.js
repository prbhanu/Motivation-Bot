const { SlashCommandBuilder } = require('discord.js');
const axios = require("axios")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('motiv')
		.setDescription('Sends a random motivation quote.'),
	async execute(interaction) {
        const url = "https://motivationapi.prbhanu1.repl.co/api/quotes"
        axios.get(url).then((response)=>{
            console.log(response.data.value)
        })
	},
};