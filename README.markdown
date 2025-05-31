# ZIGLOO :lizard: :package:

![Zigloo CI](https://github.com/alyxshang/zigloo/actions/workflows/deno.yml/badge.svg)

![Deploy CI](https://github.com/alyxshang/zigloo/actions/workflows/deploy.yml/badge.svg)

***A fresh take on a Zig package registry.  :lizard: :package:***

## ABOUT :books:

This repository contains the source code for a package registry for the Zig programming language.
The registry uses the GitHub API by fetching information on repositories that have ***both*** the topics
`zig-package` and `zig-library` in their list of topics. The registry uses the Fresh framework and Deno to render
this data.

## DOCUMENTATION :book:

### General

The list of Zig packages is refreshed every single time you make a request to the 
site. The database used is GitHub's own database. If you want your package to appear,
add the `zig-package` and `zig-library` topics to your Zig project on GitHub. You should also have a `README` in your repository written in Markdown and you ***must*** have a homepage set for your repository. If any of these requirements are not met, your project will not appear on Zigloo.

### Running unit tests

To run the included unit tests, please run the following command from
the root of this repository: `deno task test`.

## CHANGELOG :black_nib:

### Version 0.1.0

- Initial release.
- Upload to GitHub.

## NOTE :scroll:

- *Zigloo :lizard: :package:* by *Alyx Shang :black_heart:*.
- Licensed under the [FSL v1](https://github.com/alyxshang/fair-software-license).
