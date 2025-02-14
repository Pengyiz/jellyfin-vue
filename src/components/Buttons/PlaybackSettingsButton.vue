<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :close-on-click="true"
    :transition="'slide-y-transition'"
    top
    :nudge-top="nudgeTop"
    offset-y
    min-width="25em"
    max-width="25em"
    :z-index="500"
    class="menu"
    @input="$emit('input', $event)"
  >
    <!-- eslint-disable-next-line vue/no-template-shadow -->
    <template #activator="{ on: menu, attrs }">
      <v-tooltip top>
        <template #activator="{ on: tooltip }">
          <v-btn
            class="align-self-center active-button"
            icon
            v-bind="attrs"
            v-on="{ ...tooltip, ...menu }"
          >
            <v-icon>mdi-cog</v-icon>
          </v-btn>
        </template>
        <span>{{ $t('playbackSettings') }}</span>
      </v-tooltip>
    </template>
    <v-card>
      <v-list color="transparent">
        <v-list-item disabled>
          <v-row align="center">
            <v-col :cols="4">
              <label>{{ $t('quality') }}</label>
            </v-col>
            <v-col :cols="8">
              <v-select />
            </v-col>
          </v-row>
        </v-list-item>
        <v-list-item>
          <v-row align="center">
            <v-col :cols="4">
              <label>{{ $t('audio') }}</label>
            </v-col>
            <v-col :cols="8">
              <media-stream-selector
                v-if="getCurrentItemAudioTrack"
                :media-streams="getCurrentItemAudioTrack"
                type="Audio"
                :default-stream-index="currentAudioStreamIndex"
                @input="setAudio($event)"
              />
            </v-col>
          </v-row>
        </v-list-item>
        <v-list-item v-show="!$vuetify.breakpoint.smAndUp">
          <v-row align="center">
            <v-col :cols="4">
              <label>{{ $t('subtitles') }}</label>
            </v-col>
            <v-col :cols="8">
              <media-stream-selector
                v-if="getCurrentItemSubtitleTracks"
                :media-streams="getCurrentItemSubtitleTracks"
                type="Subtitle"
                :default-stream-index="currentSubtitleStreamIndex"
                @input="setSubtitle($event)"
              />
            </v-col>
          </v-row>
        </v-list-item>
        <v-list-item disabled>
          <v-row align="center">
            <v-col :cols="4">
              <label>{{ $t('speed') }}</label>
            </v-col>
            <v-col :cols="8">
              <v-select />
            </v-col>
          </v-row>
        </v-list-item>
        <v-list-item>
          <v-row align="center">
            <v-col :cols="4">
              <label>{{ $t('stretch') }}</label>
            </v-col>
            <v-col :cols="8">
              <v-switch v-model="stretch" />
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapMutations, mapState } from 'vuex';
import itemHelper from '~/mixins/itemHelper';

export default Vue.extend({
  mixins: [itemHelper],
  props: {
    nudgeTop: {
      type: [Number, String],
      default: 0
    },
    stretchProp: Boolean
  },
  data() {
    return {
      menu: false,
      stretch: this.stretchProp
    };
  },
  computed: {
    ...mapGetters('playbackManager', [
      'getCurrentItemAudioTrack',
      'getCurrentItemSubtitleTracks'
    ]),
    ...mapState('playbackManager', [
      'currentAudioStreamIndex',
      'currentSubtitleStreamIndex'
    ])
  },
  watch: {
    stretchProp(value) {
      this.stretch = value;
    },
    stretch(value) {
      this.$emit('stretch', value);
    }
  },
  methods: {
    ...mapMutations('playbackManager', [
      'SET_CURRENT_AUDIO_TRACK_INDEX',
      'SET_CURRENT_SUBTITLE_TRACK_INDEX'
    ]),
    setAudio(audioStreamIndex: number) {
      if (this.currentAudioStreamIndex !== audioStreamIndex) {
        this.SET_CURRENT_AUDIO_TRACK_INDEX({ audioStreamIndex });
      }
    },
    setSubtitle(subtitleStreamIndex: number) {
      if (this.currentSubtitleStreamIndex !== subtitleStreamIndex) {
        this.SET_CURRENT_SUBTITLE_TRACK_INDEX({ subtitleStreamIndex });
      }
    }
  }
});
</script>
