package com.spl.gymmassive.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@Configuration
@ComponentScan("com.spl.gymmassive")
@EnableAspectJAutoProxy
public class AspectConfig {
}
