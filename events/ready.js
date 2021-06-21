module.exports = async (client) => {
    console.log(`> Logged in as: ${client.user.username}#${client.user.discriminator}` .brightGreen);
    console.log(`> Prefix: ${client.config.discord.prefix}` .brightGreen);
};

