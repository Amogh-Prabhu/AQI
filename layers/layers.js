var wms_layers = [];

var format_Admin2_0 = new ol.format.GeoJSON();
var features_Admin2_0 = format_Admin2_0.readFeatures(json_Admin2_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Admin2_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Admin2_0.addFeatures(features_Admin2_0);
var lyr_Admin2_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Admin2_0, 
                style: style_Admin2_0,
                interactive: true,
    title: 'Admin2<br />\
    <img src="styles/legend/Admin2_0_0.png" /> 61 - 78<br />\
    <img src="styles/legend/Admin2_0_1.png" /> 78 - 107<br />\
    <img src="styles/legend/Admin2_0_2.png" /> 107 - 146<br />\
    <img src="styles/legend/Admin2_0_3.png" /> 146 - 191<br />\
    <img src="styles/legend/Admin2_0_4.png" /> 191 - 241<br />'
        });

lyr_Admin2_0.setVisible(true);
var layersList = [lyr_Admin2_0];
lyr_Admin2_0.set('fieldAliases', {'ST_NM': 'ST_NM', 'JOIN ID': 'JOIN ID', 'AQI_State': 'AQI_State', 'AQI_AQI': 'AQI_AQI', });
lyr_Admin2_0.set('fieldImages', {'ST_NM': 'TextEdit', 'JOIN ID': 'TextEdit', 'AQI_State': 'TextEdit', 'AQI_AQI': 'Range', });
lyr_Admin2_0.set('fieldLabels', {'ST_NM': 'header label', 'JOIN ID': 'no label', 'AQI_State': 'no label', 'AQI_AQI': 'inline label', });
lyr_Admin2_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});