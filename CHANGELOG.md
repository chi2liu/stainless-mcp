# Changelog

## 1.0.0 (2025-08-09)

Full Changelog: [v0.0.1-alpha.0...v1.0.0](https://github.com/chi2liu/stainless-mcp/compare/v0.0.1-alpha.0...v1.0.0)

### Features

* **api:** update via SDK Studio ([8e17e93](https://github.com/chi2liu/stainless-mcp/commit/8e17e93daae1777aee2ae3e70bb9b4f5479d12af))
* **client:** add support for endpoint-specific base URLs ([6ed3242](https://github.com/chi2liu/stainless-mcp/commit/6ed3242de878f9f1a540af6aceea501e7cf91c49))
* **mcp:** add logging when environment variable is set ([bf9d120](https://github.com/chi2liu/stainless-mcp/commit/bf9d120639878ca92815455016fbe6cf53cc6c39))
* **mcp:** add unix socket option for remote MCP ([0a81f4f](https://github.com/chi2liu/stainless-mcp/commit/0a81f4f9f9cb320391c3ec1b18a636c730a893ec))
* **mcp:** fallback for void-typed methods ([a14dd47](https://github.com/chi2liu/stainless-mcp/commit/a14dd474f3eab7fabb968ef2527c76a0baa72dab))
* **mcp:** remote server with passthru auth ([086af06](https://github.com/chi2liu/stainless-mcp/commit/086af0686732e33b9df723bde50b036531a7e271))
* **mcp:** set X-Stainless-MCP header ([b498f27](https://github.com/chi2liu/stainless-mcp/commit/b498f274f24f8f60cdc7660d70dd4e1299b3f4e0))
* **mcp:** support filtering tool results by a jq expression ([6cef7fc](https://github.com/chi2liu/stainless-mcp/commit/6cef7fcc81d9d82bc48d7906e0f0d849c2d013c2))


### Bug Fixes

* **ci:** release-doctor — report correct token name ([1f18609](https://github.com/chi2liu/stainless-mcp/commit/1f18609cb50cdfc411a3c5e6ccf9a51ad630f6f0))
* **client:** explicitly copy fetch in withOptions ([d9ce342](https://github.com/chi2liu/stainless-mcp/commit/d9ce342568d192077603ee01cfeb3ecd32a05d81))
* **client:** get fetchOptions type more reliably ([b559924](https://github.com/chi2liu/stainless-mcp/commit/b559924203de15016195e1d385e126e1cc133889))
* **mcp:** avoid sending `jq_filter` to base API ([97b45f6](https://github.com/chi2liu/stainless-mcp/commit/97b45f61aaac160cdea4d1271d1e5e7df3714790))
* **mcp:** include required section for top-level properties and support naming transformations ([91f6c76](https://github.com/chi2liu/stainless-mcp/commit/91f6c762e376e358591a989783681a885a5b0556))
* **mcp:** relax input type for asTextContextResult ([0b75225](https://github.com/chi2liu/stainless-mcp/commit/0b75225e3194e4abe1fbbb415a911cda808a6e92))
* **mcp:** reverse validJson capability option and limit scope ([6c876ae](https://github.com/chi2liu/stainless-mcp/commit/6c876aedae8ae65b7b08f2950f8fd52ddf2c5b88))
* **mcp:** support jq filtering on cloudflare workers ([97b7e6a](https://github.com/chi2liu/stainless-mcp/commit/97b7e6ad3e3556ea782f7c5d78d12c80d7e3e26c))
* publish script — handle NPM errors correctly ([545da2b](https://github.com/chi2liu/stainless-mcp/commit/545da2bb0eae54cf7eb66572f0805b29e63e8740))


### Chores

* add docs to RequestOptions type ([6fcfa37](https://github.com/chi2liu/stainless-mcp/commit/6fcfa376853436a51a9daacc6ecc411c4fd50690))
* **ci:** enable for pull requests ([be00b60](https://github.com/chi2liu/stainless-mcp/commit/be00b603ae9baf486fb1679d5080c34ff5e6c736))
* **ci:** only run for pushes and fork pull requests ([ba09bdc](https://github.com/chi2liu/stainless-mcp/commit/ba09bdc4ed879a9636eda8ffd6eb667314622f4a))
* **client:** improve path param validation ([afcbe44](https://github.com/chi2liu/stainless-mcp/commit/afcbe44e4f9cc531a20be1ad26d08e46062fa471))
* **client:** refactor imports ([d4e6503](https://github.com/chi2liu/stainless-mcp/commit/d4e65039f3b86ad999e880d4a0661e89a95dc7aa))
* configure new SDK language ([5ce64d1](https://github.com/chi2liu/stainless-mcp/commit/5ce64d1f341f5e425df85c4b75639b45c8b7821f))
* **internal:** add pure annotations, make base APIResource abstract ([9f0507c](https://github.com/chi2liu/stainless-mcp/commit/9f0507c7b87a86c5678d1e7a897bcd3ad0c53076))
* **internal:** codegen related update ([13c25e9](https://github.com/chi2liu/stainless-mcp/commit/13c25e96956c45b7a1a2dc9ed3c3c23c2af856ba))
* **internal:** codegen related update ([a4f986f](https://github.com/chi2liu/stainless-mcp/commit/a4f986fe8ae8651fb408f98ec3a0a740e6184d52))
* **internal:** move publish config ([b4d19e5](https://github.com/chi2liu/stainless-mcp/commit/b4d19e54958b0f53f5373c501ca4906f853fde78))
* **internal:** remove redundant imports config ([301c100](https://github.com/chi2liu/stainless-mcp/commit/301c100164597e8becc3b072bf17ae39dd6bc5f9))
* **internal:** update comment in script ([2ee9692](https://github.com/chi2liu/stainless-mcp/commit/2ee9692ebbabf95b2461dd04dc2089ee18e6dca4))
* make some internal functions async ([9c72a46](https://github.com/chi2liu/stainless-mcp/commit/9c72a46a0743e0dd35a8c33aec4e524900219dcc))
* **mcp:** formatting ([f2d474c](https://github.com/chi2liu/stainless-mcp/commit/f2d474c6a6232dab772b9cae467273b35f2e9abf))
* **mcp:** refactor streamable http transport ([b446278](https://github.com/chi2liu/stainless-mcp/commit/b4462785406c323af2838f4fd045f3beb6dac026))
* **mcp:** rework imports in tools ([a5b6374](https://github.com/chi2liu/stainless-mcp/commit/a5b6374bda622fe2bf5bb2b1f19d1f4ac9035f96))
* **readme:** update badges ([035230d](https://github.com/chi2liu/stainless-mcp/commit/035230d2b288665b6434171dc64882ff795c15c4))
* **readme:** use better example snippet for undocumented params ([af6db62](https://github.com/chi2liu/stainless-mcp/commit/af6db62c8d6504f83f12d36c53c726e583026810))
* **ts:** reorder package.json imports ([3c5cef0](https://github.com/chi2liu/stainless-mcp/commit/3c5cef0c1000b2c581531b9544d22803bbc52b99))
* update @stainless-api/prism-cli to v5.15.0 ([66c1eb8](https://github.com/chi2liu/stainless-mcp/commit/66c1eb8fd4fca098347853ee689940d43357e9ba))
* update SDK settings ([c4918e4](https://github.com/chi2liu/stainless-mcp/commit/c4918e459a2af70c3668cd6a900fce902a8dcebc))


### Refactors

* **types:** replace Record with mapped types ([e43fb01](https://github.com/chi2liu/stainless-mcp/commit/e43fb01f41c741a5c8b2b53bc4f84ce7d9ef7049))
