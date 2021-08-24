const { CommandInteracion, Client, MessageEmbed } = require('discord.js');


module.exports = {
   name: 'roleinfo',
   description: 'See information about a role',
   options: [{name: "role", type:"ROLE", description:"The role you want information about", require: true}],
   /**
   *
   * @param {Client} client
   * @param {CommandInteracion} interaction
   * @param {String[]} args
   */
 run: async (interaction, bot, args) => {
    const role = interaction.guild.roles.cache.get(args[0])

    let ishoist = role.hoist
            if (ishoist === true) ishoist = "Yes";
            if (ishoist === false) ishoist = "No";
    let hex = role.hexColor.split('').slice(1).join("")

    const embed = new MessageEmbed()
    .setColor(role.color)
    .setThumbnail(`https://singlecolorimage.com/get/${hex}/400x400`)
    .addFields(
        {
            name: "Mention & ID",
            value: `${role}\n<:Reply:872941400872869899>\`${role.id}\``
        },
        {
            name: "Name",
            value: role.name, inline: true
        },
        {
            name: "Color",
            value: `${role.hexColor}`, inline: true
        },
        {
            name: "Position",
            value: `${role.position}`
        },
        {
            name: `Hoisted`,
            value: `${ishoist}`, inline: true
        },
        {
            name: "Mentionable",
            value: `${role.mentionable}`, inline: true
        },
        
        )
        return interaction.reply({embeds: [embed]})
// used editReply() if you defer the slash commands

 }
}