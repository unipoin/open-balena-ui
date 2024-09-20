# [1.2.0](https://github.com/unipoin/open-balena-ui/compare/v1.1.0...v1.2.0) (2024-09-20)


### Bug Fixes

* Device bulk delete function fixed ([ab15760](https://github.com/unipoin/open-balena-ui/commit/ab157602f216ef877076ee8b18c750d5669ec39d))
* Forward extra props to Chip ([7c71d54](https://github.com/unipoin/open-balena-ui/commit/7c71d546ef3fd4eb21d70beee46e105a92696149))
* Forward RecordContext to child components in list ([05dccbb](https://github.com/unipoin/open-balena-ui/commit/05dccbb020a43880f59be55d4190b5452fd19cbc))
* Make sure service-installs get created after and only if the actual device has been created successfully ([2f2edbd](https://github.com/unipoin/open-balena-ui/commit/2f2edbd5baf66523b7cd8669fea2cccf919efe1c))
* Preload behavior of DualListBoxes fixed ([cbc2e22](https://github.com/unipoin/open-balena-ui/commit/cbc2e22d8986b9816c8f0c0047aca5753cd91de5))
* Properly handle list service vars when shown in device dashboard ([92e5971](https://github.com/unipoin/open-balena-ui/commit/92e59718626e4f815d741f755c60f65e0060707f))


### Features

* Add refresh button ([e2e64b0](https://github.com/unipoin/open-balena-ui/commit/e2e64b06bd02bbc38b2352bc1ad46e1ae4fb862e))
* Add status indicator icon in place of checkbox ([9e7a954](https://github.com/unipoin/open-balena-ui/commit/9e7a9543c8d088231a3bd326496eed60f2625021))
* AlwaysEnableSaveButton removed for ApiKeyEditForm to have it consistent with other forms ([68849ab](https://github.com/unipoin/open-balena-ui/commit/68849abfad7ec31d969d89663f5b7a87136c0bc6))
* AlwaysEnableSaveButton removed for RoleEditForm to have it consistent with other forms ([d31bb36](https://github.com/unipoin/open-balena-ui/commit/d31bb36ea56f994bf12b5b2d1668ab4533f2e0e1))
* AlwaysEnableSaveButton removed for UserEditForm to have it consistent with other forms ([1920a18](https://github.com/unipoin/open-balena-ui/commit/1920a1806d8daa64e066cd7ab48d5283025b07d4))
* Device dashboard made responsive ([8222148](https://github.com/unipoin/open-balena-ui/commit/8222148fb11929411d5dcc273adc88df8828384c))
* Handle container selection with state hook ([14accd4](https://github.com/unipoin/open-balena-ui/commit/14accd4b8f9121bca04070ac98ec9dd68a513568))
* Highlight error and system messages ([8ecd31e](https://github.com/unipoin/open-balena-ui/commit/8ecd31ed50ff4864d35c1f3f79695029d09a4cc7))
* Make device selection an AutocompleteInput which is much more handy for long lists ([3cfdce8](https://github.com/unipoin/open-balena-ui/commit/3cfdce8a26430fe94d05a6e86db82d6527372023))

# [1.1.0](https://github.com/unipoin/open-balena-ui/compare/v1.0.5...v1.1.0) (2024-08-29)


### Bug Fixes

* Explicit requirement for controllers added ([2ea7689](https://github.com/unipoin/open-balena-ui/commit/2ea768965432aaab1f1b6d5006a9c5990af63018))
* Handle requests without Auth header more gently ([002ee26](https://github.com/unipoin/open-balena-ui/commit/002ee26bbd00684051ab0db1869da1f72ef40152))


### Features

* Throw error if OPEN_BALENA_S3_URL is not set in env ([f66a7f5](https://github.com/unipoin/open-balena-ui/commit/f66a7f5ea0554cb839a6b47c1974001bc8e1efb9))
* Title shown in App Bar to be in sync with tab selected ([8c93312](https://github.com/unipoin/open-balena-ui/commit/8c93312c67bb3e4108926cbe13ed11eb62aa88c0))

## [1.0.5](https://github.com/unipoin/open-balena-ui/compare/v1.0.4...v1.0.5) (2024-08-28)


### Bug Fixes

* docker container is now node:22-alpine based. bash is not instal… ([#31](https://github.com/unipoin/open-balena-ui/issues/31)) ([f45e616](https://github.com/unipoin/open-balena-ui/commit/f45e616bad6efe38a1f7088f278bee54fb419da8))
* docker container is now node:22-alpine based. bash is not installed --> changed to sh. ([3907438](https://github.com/unipoin/open-balena-ui/commit/3907438672b918d6199410431279184ed7bb1e1e))

## [1.0.4](https://github.com/unipoin/open-balena-ui/compare/v1.0.3...v1.0.4) (2024-08-28)


### Bug Fixes

* add additional line to force new release. ([657d4dd](https://github.com/unipoin/open-balena-ui/commit/657d4dd8d7839f93179ae1b3fd65f91a40b4b10a))
* trigger docker image build on new releases. ([#30](https://github.com/unipoin/open-balena-ui/issues/30)) ([fe195db](https://github.com/unipoin/open-balena-ui/commit/fe195dbef8c1bafc4330521e95807800175d4327))

## [1.0.3](https://github.com/unipoin/open-balena-ui/compare/v1.0.2...v1.0.3) (2024-08-28)


### Bug Fixes

* split github action into two files: release.yml and build-and-pu… ([#29](https://github.com/unipoin/open-balena-ui/issues/29)) ([f88f70c](https://github.com/unipoin/open-balena-ui/commit/f88f70cfd75f6d6d1cfb35e11a63858461111df1))
* split github action into two files: release.yml and build-and-publish-image.yml. build is run on tags or pull-requests, but only publish on tags. ([174850a](https://github.com/unipoin/open-balena-ui/commit/174850ac93b3afeb9b3132afcedb3fc86a815a9f))

## [1.0.2](https://github.com/unipoin/open-balena-ui/compare/v1.0.1...v1.0.2) (2024-08-28)


### Bug Fixes

* add empty line to force new release. ([6369926](https://github.com/unipoin/open-balena-ui/commit/63699268c323977be43e1a0530b2cc905c8a3cf6))
* add empty line to force new release. ([#28](https://github.com/unipoin/open-balena-ui/issues/28)) ([27f9d13](https://github.com/unipoin/open-balena-ui/commit/27f9d13487ce4c74c2e4b214f31bdfbc3ae3a4ec))

## [1.0.1](https://github.com/unipoin/open-balena-ui/compare/v1.0.0...v1.0.1) (2024-08-28)


### Bug Fixes

* attestation write permission. ([dc4b648](https://github.com/unipoin/open-balena-ui/commit/dc4b6485462d4e8be493def2b8f42ab829ca54b8))
* attestation write permission. ([#25](https://github.com/unipoin/open-balena-ui/issues/25)) ([fa6787c](https://github.com/unipoin/open-balena-ui/commit/fa6787ce2c4e41c07b8f24ee875ebac68b9e43f7))

# 1.0.0 (2024-08-28)


### Bug Fixes

* create has a redirect attribute, not simpleform. ([fc5c4ae](https://github.com/unipoin/open-balena-ui/commit/fc5c4ae5f4555e8625489139d281024a332af568))
* create has a redirect attribute, not simpleform. ([d881223](https://github.com/unipoin/open-balena-ui/commit/d88122326e8394ca0928b6e9bb47c71142c0cf93))
* create has a redirect attribute, not simpleform. ([8e3c076](https://github.com/unipoin/open-balena-ui/commit/8e3c0766fa74f454b0492fa3ced2f0cfa715b066))
* issues with fleet handling ([1eded50](https://github.com/unipoin/open-balena-ui/commit/1eded503216e574ff0629807d5b4d5c9d2dda073))
* make apikey key and name required and readOnly. ([d7ad6d6](https://github.com/unipoin/open-balena-ui/commit/d7ad6d6388113d2b9d16e32b5523b57412e1577c))
* make sure the const value is boolean ([a694810](https://github.com/unipoin/open-balena-ui/commit/a6948103f2ff83cbd9b167ab9f4bc94e14e229ce))
* make username readOnly on user edit ([e4c4eef](https://github.com/unipoin/open-balena-ui/commit/e4c4eef7ee4caade71bc102c4525ae6d20b614fd))
* showHeaderLabels expects bool not string ([fa263fa](https://github.com/unipoin/open-balena-ui/commit/fa263fa67e271dddcf44eb8e27a11748e02d957b))
* update forgotten package-lock.json. ([6901e3e](https://github.com/unipoin/open-balena-ui/commit/6901e3ec4b5ef0d067724021a8c3308355f16408))


### Reverts

* Revert "Add .env template file for quicker start up" ([2b32c77](https://github.com/unipoin/open-balena-ui/commit/2b32c77cb69a3ecdb70474a52ffd264b9d7c1846))
