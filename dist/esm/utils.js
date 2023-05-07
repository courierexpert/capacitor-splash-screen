export const kDurationMsThreshold = 10;
export function durationToMs(duration) {
    return duration >= kDurationMsThreshold ? duration : duration * 1000;
}
export function durationToSeconds(duration) {
    return duration >= kDurationMsThreshold ? duration / 1000 : duration;
}
