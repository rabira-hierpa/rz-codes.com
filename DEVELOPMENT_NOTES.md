# Development Notes

## External Images in Development

### Issue
External images from `blog.rz-codes.com` don't load during development (`localhost:8000`) but work perfectly in production builds.

### Why This Happens
1. **In Development**: Gatsby serves your site locally, and browsers block external images from `blog.rz-codes.com` due to CORS (Cross-Origin Resource Sharing) policy
2. **In Production**: Gatsby downloads all external images during the build process and serves them from your domain, so CORS doesn't apply

### Current Behavior
- ✅ **Production** (`gatsby build` + deploy): All images work perfectly
- ❌ **Development** (`gatsby develop`): External images show as broken

### Affected Images
All images hosted on `blog.rz-codes.com`:
- Featured Projects section (apps.json)
- Latest Insights section (WordPress featured images)
- GIS Projects section (projects.json)
- Graphics Designs section (designs.json)
- Apps page
- Projects page
- Designs page

### Solution Options

#### Option 1: Accept Current Behavior (Recommended for Now)
**Status**: Current approach
- Images are broken in development but work in production
- No code changes needed
- Simple and straightforward
- **Use production builds to verify image functionality**

#### Option 2: Use Gatsby Plugin for Remote Images
**Best long-term solution**

Install and configure `gatsby-plugin-remote-images`:

```bash
npm install gatsby-plugin-remote-images
```

Add to `gatsby-config.js`:

```javascript
{
  resolve: `gatsby-plugin-remote-images`,
  options: {
    nodeType: 'AppsJson',
    imagePath: 'image',
    name: 'localImage',
  },
},
{
  resolve: `gatsby-plugin-remote-images`,
  options: {
    nodeType: 'ProjectsJson',
    imagePath: 'img',
    name: 'localImage',
  },
},
{
  resolve: `gatsby-plugin-remote-images`,
  options: {
    nodeType: 'DesignsJson',
    imagePath: 'images',
    name: 'localImages',
  },
},
{
  resolve: `gatsby-plugin-remote-images`,
  options: {
    nodeType: 'WpMediaItem',
    imagePath: 'sourceUrl',
    name: 'localImage',
  },
}
```

Then update components to use `localImage` fields instead of remote URLs.

#### Option 3: Use a Development Proxy
Configure `gatsby-config.js` with a proxy:

```javascript
module.exports = {
  developMiddleware: app => {
    app.use('/proxy-images', async (req, res) => {
      // Proxy requests to blog.rz-codes.com
    })
  }
}
```

This requires custom middleware implementation.

#### Option 4: Download Images to Local Directory
Manually download all images to `src/assets/images/` and update JSON files to use local paths.

**Pros:**
- Works in both dev and production
- Faster loading times
- No external dependencies

**Cons:**
- Manual process
- Increases repository size
- Needs updates when images change

### Testing Images

To verify images work correctly:

```bash
# Build for production
npm run build

# Serve the production build
npm run serve

# Or deploy to your hosting platform
```

### Related Files
- `src/data/apps.json` - App project images
- `src/data/projects.json` - GIS project images  
- `src/data/designs.json` - Graphics design images
- WordPress API - Blog post featured images

### Status
**Expected Behavior** - This is normal for Gatsby sites using external images.

Images load correctly in production builds, which is what matters for your deployed site.

---

**Last Updated**: January 2025  
**Gatsby Version**: 5.x

