# Changelog

## [3.3.0](https://github.com/LuanRT/YouTube.js/compare/v3.2.0...v3.3.0) (2023-03-09)


### Features

* **parser:** add `ConversationBar` node ([b2253df](https://github.com/LuanRT/YouTube.js/commit/b2253df8022217dc486155d8cacbf22db04dd9c2))
* **VideoInfo:** support get by endpoint + more info ([#342](https://github.com/LuanRT/YouTube.js/issues/342)) ([0d35fe0](https://github.com/LuanRT/YouTube.js/commit/0d35fe0ca5e87a877b76cbb6cf3c92843eac5a99))


### Bug Fixes

* **MultiMarkersPlayerBar:** avoid observing undefined objects ([f351770](https://github.com/LuanRT/YouTube.js/commit/f3517708ff34093a544c09d6f5f1ec806130d5cc))
* **SharedPost:** import `Menu` node directly (oops) ([3e3dc35](https://github.com/LuanRT/YouTube.js/commit/3e3dc351bb44faec87616d9b922924d14a95f29f))
* **ytmusic:** use static visitor id to avoid empty API responses ([f9754f5](https://github.com/LuanRT/YouTube.js/commit/f9754f5ac61d0f11b025f37f93783f971560268b)), closes [#279](https://github.com/LuanRT/YouTube.js/issues/279)

## [3.2.0](https://github.com/LuanRT/YouTube.js/compare/v3.1.1...v3.2.0) (2023-03-08)


### Features

* Add support for descriptive audio tracks ([#338](https://github.com/LuanRT/YouTube.js/issues/338)) ([574b67a](https://github.com/LuanRT/YouTube.js/commit/574b67a1f707a32378586dd2fe7b2f36f4ab6ddb))
* export `FormatUtils`' types ([2d774e2](https://github.com/LuanRT/YouTube.js/commit/2d774e26aae79f3d1b115e0e85c148ae80985529))
* **parser:** add `banner` to `PlaylistHeader` ([#337](https://github.com/LuanRT/YouTube.js/issues/337)) ([95033e7](https://github.com/LuanRT/YouTube.js/commit/95033e723ef912706e4d176de6b2760f017184e1))
* **parser:** SharedPost ([#332](https://github.com/LuanRT/YouTube.js/issues/332)) ([ce53ac1](https://github.com/LuanRT/YouTube.js/commit/ce53ac18435cbcb20d6d4c4ab52fd156091e7592))
* **VideoInfo:** add `game_info` and `category` ([#333](https://github.com/LuanRT/YouTube.js/issues/333)) ([214aa14](https://github.com/LuanRT/YouTube.js/commit/214aa147ce6306e37a6bf860a7bed5635db4797e))
* **YouTube/Search:** add `SearchSubMenu` node ([#340](https://github.com/LuanRT/YouTube.js/issues/340)) ([a511608](https://github.com/LuanRT/YouTube.js/commit/a511608f18b37b0d9f2c7958ed5128330fabcfa0))
* **yt:** add `getGuide()` ([#335](https://github.com/LuanRT/YouTube.js/issues/335)) ([2cc7b8b](https://github.com/LuanRT/YouTube.js/commit/2cc7b8bcd6938c7fb3af4f854a1d78b86d153873))


### Bug Fixes

* **SegmentedLikeDislikeButton:** like/dislike buttons can also be a simple `Button` ([9b2738f](https://github.com/LuanRT/YouTube.js/commit/9b2738f1285b278c3e83541857651be9a6248288))
* **YouTube:** fix warnings when retrieving members-only content ([#341](https://github.com/LuanRT/YouTube.js/issues/341)) ([95f1d40](https://github.com/LuanRT/YouTube.js/commit/95f1d4077ff3775f36967dca786139a09e2830a2))
* **ytmusic:** export search filters type ([cf8a33c](https://github.com/LuanRT/YouTube.js/commit/cf8a33c79f5432136b865d535fd0ecedc2393382))

## [3.1.1](https://github.com/LuanRT/YouTube.js/compare/v3.1.0...v3.1.1) (2023-03-01)


### Bug Fixes

* **Channel:** getting community continuations ([#329](https://github.com/LuanRT/YouTube.js/issues/329)) ([4c7b8a3](https://github.com/LuanRT/YouTube.js/commit/4c7b8a34030effa26c4ea186d3e9509128aec31c))

## [3.1.0](https://github.com/LuanRT/YouTube.js/compare/v3.0.0...v3.1.0) (2023-02-26)


### Features

* Add upcoming and live info to playlist videos ([#317](https://github.com/LuanRT/YouTube.js/issues/317)) ([a0bfe16](https://github.com/LuanRT/YouTube.js/commit/a0bfe164279ec27b0c49c6b0c32222c1a92df5c3))
* **VideoSecondaryInfo:** add support for attributed descriptions ([#325](https://github.com/LuanRT/YouTube.js/issues/325)) ([f933cb4](https://github.com/LuanRT/YouTube.js/commit/f933cb45bcb92c07b3bc063d63869a51cbff4eb0))


### Bug Fixes

* **parser:** export YTNodes individually so they can be used as types ([200632f](https://github.com/LuanRT/YouTube.js/commit/200632f374d5e0e105b600d579a2665a6fb36e38)), closes [#321](https://github.com/LuanRT/YouTube.js/issues/321)
* **PlayerMicroformat:** Make the embed field optional ([#320](https://github.com/LuanRT/YouTube.js/issues/320)) ([a0e6cef](https://github.com/LuanRT/YouTube.js/commit/a0e6cef00fb9e3f52593cec22704f7ddc1f7553e))
* send correct UA for Android requests ([f4e0f30](https://github.com/LuanRT/YouTube.js/commit/f4e0f30e6e94b347b28d67d9a86284ea2d23ee15)), closes [#322](https://github.com/LuanRT/YouTube.js/issues/322)

## [3.0.0](https://github.com/LuanRT/YouTube.js/compare/v2.9.0...v3.0.0) (2023-02-17)


### ⚠ BREAKING CHANGES

* cleanup platform support ([#306](https://github.com/LuanRT/YouTube.js/issues/306))

### Features

* add parser support for MultiImage community posts ([#298](https://github.com/LuanRT/YouTube.js/issues/298)) ([de61782](https://github.com/LuanRT/YouTube.js/commit/de61782f1a673cbe66ae9b410341e39b7501ba84))
* add support for hashtag feeds ([#312](https://github.com/LuanRT/YouTube.js/issues/312)) ([bf12740](https://github.com/LuanRT/YouTube.js/commit/bf12740333a82c26fe84e7c702c2fbb8859814fc))
* add support for YouTube Kids ([#291](https://github.com/LuanRT/YouTube.js/issues/291)) ([2bbefef](https://github.com/LuanRT/YouTube.js/commit/2bbefefbb7cb061f3e7b686158b7568c32f0da5d))
* allow checking whether a channel has optional tabs ([#296](https://github.com/LuanRT/YouTube.js/issues/296)) ([ceefbed](https://github.com/LuanRT/YouTube.js/commit/ceefbed98c70bb936e2d2df58c02834842acfdfc))
* **Channel:** Add getters for all optional tabs ([#303](https://github.com/LuanRT/YouTube.js/issues/303)) ([b2900f4](https://github.com/LuanRT/YouTube.js/commit/b2900f48a7aa4c22635e1819ba9f636e81964f2c))
* **Channel:** add support for sorting the playlist tab ([#295](https://github.com/LuanRT/YouTube.js/issues/295)) ([50ef712](https://github.com/LuanRT/YouTube.js/commit/50ef71284db41e5f94bb511892651d22a1d363a0))
* extract channel error alert ([0b99180](https://github.com/LuanRT/YouTube.js/commit/0b991800a5c67f0e702251982b52eb8531f36f19))
* **FormatUtils:** support multiple audio tracks in the DASH manifest ([#308](https://github.com/LuanRT/YouTube.js/issues/308)) ([a69e43b](https://github.com/LuanRT/YouTube.js/commit/a69e43bf3ae02f2428c4aa86f647e3e5e0db5ba6))
* improve support for dubbed content ([#293](https://github.com/LuanRT/YouTube.js/issues/293)) ([d6c5a9b](https://github.com/LuanRT/YouTube.js/commit/d6c5a9b971444d0cd746aaf5310d3389793680ea))
* parse isLive in CompactVideo ([#294](https://github.com/LuanRT/YouTube.js/issues/294)) ([2acb7da](https://github.com/LuanRT/YouTube.js/commit/2acb7da0198bfeca6ff911cf95cf06a220fccaa5))
* **parser:** add `ChannelAgeGate` node ([1cdf701](https://github.com/LuanRT/YouTube.js/commit/1cdf701c8403db6b681a26ecb1df2daa51add454))
* **parser:** Text#toHTML ([#300](https://github.com/LuanRT/YouTube.js/issues/300)) ([e82e23d](https://github.com/LuanRT/YouTube.js/commit/e82e23dfbb24dff3ddf45754c7319d783990e254))
* **ytkids:** add `getChannel()` ([#292](https://github.com/LuanRT/YouTube.js/issues/292)) ([0fc29f0](https://github.com/LuanRT/YouTube.js/commit/0fc29f0bbf965215146a6ae192494c74e6cefcbb))


### Bug Fixes

* assign MetadataBadge's label ([#311](https://github.com/LuanRT/YouTube.js/issues/311)) ([e37cf62](https://github.com/LuanRT/YouTube.js/commit/e37cf627322f688fcef18d41345f77cbccd58829))
* **ChannelAboutFullMetadata:** fix error when there are no primary links ([#299](https://github.com/LuanRT/YouTube.js/issues/299)) ([f62c66d](https://github.com/LuanRT/YouTube.js/commit/f62c66db396ba7d2f93007414101112b49d8375f))
* **TopicChannelDetails:** avatar and subtitle parsing ([#302](https://github.com/LuanRT/YouTube.js/issues/302)) ([d612590](https://github.com/LuanRT/YouTube.js/commit/d612590530f5fe590fee969810b1dd44c37f0457))
* **VideoInfo:** Gracefully handle missing watch next continuation ([#288](https://github.com/LuanRT/YouTube.js/issues/288)) ([13ad377](https://github.com/LuanRT/YouTube.js/commit/13ad3774c9783ed2a9f286aeee88110bd43b3a73))


### Code Refactoring

* cleanup platform support ([#306](https://github.com/LuanRT/YouTube.js/issues/306)) ([2ccbe2c](https://github.com/LuanRT/YouTube.js/commit/2ccbe2ce6260ace3bfac8b4b391e583fbcc4e286))
