import 'package:flutter/material.dart';
import 'app.dart';
import 'config.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();

  FlavorConfig.initialize(
    environment: Environment.prod,
    appName: "Flavour Demo",
    baseUrl: "https://jsonplaceholder.typicode.com/users",
    primaryColor: Colors.teal,
  );

  runApp(const MyApp());
}