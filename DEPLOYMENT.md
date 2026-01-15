# 🚀 Deployment Guide

## Option A: One-Click Deploy (Recommended)
1.  Click the **Deploy with Vercel** button in the [`README.md`](../README.md).
2.  Login with **GitHub**.
3.  Vercel will automatically detect the Next.js framework.
4.  Click **Deploy**.

## Option B: Manual Vercel Setup
1.  Go to [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **Add New...** > **Project**.
3.  Import `DylanMBrown/Portfolio-website`.
4.  Leave "Build and Output Settings" as default:
    - Framework Preset: `Next.js`
    - Build Command: `next build`
5.  Click **Deploy**.

## Domain Setup
1.  Once deployed, go to **Settings** > **Domains**.
2.  Enter `dylanbrown.dev`.
3.  Follow the instructions to update your DNS records (usually adding an A Record or CNAME) at your domain registrar.

## Post-Deployment Check
- Verify that the **OpenGraph** images work on social media.
- Test the **Contact Form** (Note: You will need to configure `Resend` environment variables if you enable the backend later).
