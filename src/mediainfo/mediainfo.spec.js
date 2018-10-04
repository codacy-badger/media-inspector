const mediainfo = require('./mediainfo');

const partialPath = 'test-assets/SampleVideo_1280x720_1mb.mp4';

describe(partialPath, () => {
	test('can read', async () => {
		const metadata = await mediainfo.read(partialPath);
		expect(metadata).toMatchObject({
			_xmlns: 'https://mediaarea.net/mediainfo',
			'_xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
			'_xsi:schemaLocation': 'https://mediaarea.net/mediainfo https://mediaarea.net/mediainfo/mediainfo_2_0.xsd',
			_version: '2.0',
			media: {
				_ref: 'test-assets/SampleVideo_1280x720_1mb.mp4',
				track: [
					{
						_type: 'General',
						videocount: '1',
						audiocount: '1',
						fileextension: 'mp4',
						format: 'MPEG-4',
						formatProfile: 'Base Media',
						codecid: 'isom',
						codecidCompatible: 'isom/iso2/avc1/mp41',
						filesize: '1055736',
						duration: '5.312',
						overallbitrateMode: 'VBR',
						overallbitrate: '1589964',
						framerate: '25.000',
						framecount: '132',
						streamsize: '4277',
						headersize: '40',
						datasize: '1051467',
						footersize: '4229',
						isstreamable: 'No',
						encodedDate: 'UTC 1970-01-01 00:00:00',
						taggedDate: 'UTC 2014-07-19 17:15:29',
						fileModifiedDate: 'UTC 2018-10-04 17:40:48',
						fileModifiedDateLocal: '2018-10-04 19:40:48',
						encodedApplication: 'Lavf53.24.2'
					},
					{
						_type: 'Video',
						streamorder: '0',
						id: '1',
						format: 'AVC',
						formatProfile: 'Main',
						formatLevel: '3.1',
						formatSettingsCabac: 'Yes',
						formatSettingsRefframes: '1',
						codecid: 'avc1',
						duration: '5.280',
						bitrate: '1205959',
						width: '1280',
						height: '720',
						sampledWidth: '1280',
						sampledHeight: '720',
						pixelaspectratio: '1.000',
						displayaspectratio: '1.778',
						rotation: '0.000',
						framerateMode: 'CFR',
						framerateModeOriginal: 'VFR',
						framerate: '25.000',
						framecount: '132',
						colorspace: 'YUV',
						chromasubsampling: '4:2:0',
						bitdepth: '8',
						scantype: 'Progressive',
						streamsize: '795933',
						encodedDate: 'UTC 1970-01-01 00:00:00',
						taggedDate: 'UTC 1970-01-01 00:00:00',
						extra: {
							codecConfigurationBox: 'avcC'
						}
					},
					{
						_type: 'Audio',
						streamorder: '1',
						id: '2',
						format: 'AAC',
						formatAdditionalfeatures: 'LC',
						codecid: 'mp4a-40-2',
						duration: '5.312',
						bitrateMode: 'VBR',
						bitrate: '384000',
						bitrateMaximum: '400392',
						channels: '6',
						channelpositions: 'Front: L C R, Side: L R, LFE',
						channellayout: 'C L R Ls Rs LFE',
						samplesperframe: '1024',
						samplingrate: '48000',
						samplingcount: '254976',
						framerate: '46.875',
						framecount: '249',
						compressionMode: 'Lossy',
						streamsize: '255526',
						streamsizeProportion: '0.24204',
						default: 'Yes',
						alternategroup: '1',
						encodedDate: 'UTC 1970-01-01 00:00:00',
						taggedDate: 'UTC 1970-01-01 00:00:00'
					}
				]
			}
		});
	});
});