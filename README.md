# Display pokemon details stated in subdomain

This application displays detailed information cards for Pokémon based on the subdomain provided in the URL. If no subdomain is specified, the default Pokémon displayed is Charizard.

**Testing Locally**

To test this application locally, you will need to add the following lines to your `/etc/hosts` file:

```
127.0.0.1 ditto.pokeapp.com
127.0.0.1 bulbasaur.pokeapp.com
127.0.0.1 pokeapp.com
```

This will allow you to access the application with different subdomains, simulating the behavior of accessing different Pokémon details.

**Default Behavior**

If no subdomain is provided in the URL, the application will default to displaying the details of Charizard. This ensures that the application always has a valid Pokémon to display, even if no specific Pokémon is requested.

**How it Works**

The application uses the subdomain from the URL to determine which Pokémon to display. It extracts the subdomain from the URL and uses it to fetch the corresponding Pokémon data. If no subdomain is present, it defaults to Charizard.

**Features**

- Displays detailed information cards for Pokémon based on the subdomain provided in the URL.
- Defaults to Charizard if no subdomain is specified.
- Allows for easy testing of different Pokémon details by modifying the `/etc/hosts` file.

**Getting Started**

To get started with this application, clone the repository and follow the instructions for your development environment. Make sure to update your `/etc/hosts` file as described above to test the application with different subdomains.
