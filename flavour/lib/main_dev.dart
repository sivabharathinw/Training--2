import 'package:flutter/material.dart';
import 'app.dart';
import 'config.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  
  FlavorConfig.initialize(
    environment: Environment.dev,
    appName: "(dev mode) Flavour Demo",
    baseUrl: "https://dummyjson.com/users",
    primaryColor: Colors.blueAccent,
  );

  runApp(const MyApp());
}